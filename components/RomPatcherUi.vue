<template>
    <div v-if="notice" id="patcher-notice" v-html="$t(notice, noticeDict)"></div>
    <img v-if="isPatching && patcherAnimation" :src="patcherAnimation"
        class="patcher-animation" :alt="$t('rom-patcher-patching-rom', { patch: '' })" />
    <div class="patcher-menu">
        <div class="patcher-left">
            <div>
                <h3 class="patcher-header">{{ $t('rom-patcher-select-rom') }}</h3>
                <input id="input-file-rom" @change="selectFile" class="input-file enabled" type="file" :accept="platformData.extension"
                    ondragenter="this.classList.add('patcher-file-dragging');"
                    ondragleave="this.classList.remove('patcher-file-dragging');" />
            </div>
            <div v-if="patchData['options'] != undefined">
                <h3 class="patcher-header">{{ $t('rom-patcher-options') }}</h3>
                <table v-for="option in patchData.options" class="patcher-options">
                    <tbody>
                        <RomPatcherOptionDescription :title="$t('rom-patcher-option-' + option.name + '-title')">
                            {{ $t('rom-patcher-option-' + option.name + '-desc') }}
                        </RomPatcherOptionDescription>
                        <RomPatcherOption :optionName="option.name"
                            :option1="$t('rom-patcher-option-' + option.name + '-' + option.option1)" :option1value="option.option1" :option1data="option.data1"
                            :option2="$t('rom-patcher-option-' + option.name + '-' + option.option2)" :option2value="option.option2" :option2data="option.data2" />
                    </tbody>
                </table>
            </div>
            <div>
                <h3 class="patcher-header">{{ $t('rom-patcher-version-select') }}</h3>
                <div class="patcher-version-options">
                    <label>
                        <b>{{ $t('rom-patcher-language') }}</b>
                        <select id="patcher-locale-dropdown" v-model="patchLocale">
                            <option v-if="route.params.platform == 'ndsjp'" value="en">Japanese</option>
                            <option v-else v-for="pl in AVAILABLE_PATCH_LOCALES" :value="pl">{{ getLanguageName(locale, pl) }}</option>
                        </select>
                    </label>
                    <label>
                        <b>{{ $t('rom-patcher-version') }}</b>
                        <select id="patcher-version-dropdown">
                            <option v-for="patch in AVAILABLE_PATCHES(patchLocale)" :value="patch.version">v{{ patch.version }} &mdash; {{ patch.date }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="patcher-submit">
                    <ButtonLink link="javascript:void(0)" color="red" icon="fa6-solid:file-import" @click="patchRom">{{ $t('rom-patcher-patch-rom') }}</ButtonLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.patcher-menu {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: none;
    text-align: center;
    justify-content: left;
}

.patcher-header {
    text-align: left;
}

.patcher-options {
    text-align: left;
}

#patcher-notice {
    text-align: center;
    background-color: var(--main-light-gray);
    color: black;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.patcher-animation {
    display: block;
    margin: 0.75rem auto 0;
    width: 100%;
    max-width: 400px;
    height: auto;
}

.error-notice {
    background-color: var(--main-red) !important;
    color: white !important;
}

.warning-notice {
    background-color: orange !important;
    color: black !important;
}

.patcher-menu .patcher-left {
    display: flex;
    flex-direction: column;
}

.patcher-menu .patcher-right {
    display: flex;
    flex-direction: column;
}

.input-file {
    padding: 2em 2vw;
    border: #31343a dashed 0.2em;
    border-radius: 0.8em;
}

.input-file:hover {
    background-color: var(--main-light-gray);
}


.input-file.enabled {
    cursor: pointer;
}

.input-file:hover {
    background-color: var(--main-light-gray);
}

select {
    border: black solid 0.15em;
    border-radius: 0.3em;
    margin-left: 0.5rem;
}

.patcher-version-options {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1.5em 0;
}

.patcher-submit {
    margin-top: 1em;
}

.patcher-submit a:hover {
    cursor: pointer;
}
</style>

<script setup>
const patchLocale = ref('en')
const { locale } = useI18n({
  useScope: 'local'
})
const route = useRoute()
setup(route.params.game, route.params.platform);
const { availableLocales } = useI18n()
const AVAILABLE_PATCH_LOCALES = availableLocales.filter(locale => AVAILABLE_PATCHES(locale).length > 0);
if (AVAILABLE_PATCHES(patchLocale.value).length === 0) {
    notice.value = 'rom-patcher-no-patches-available';
}

// Resolve libraries
// Loading, hashing and patching happen in /patcher-mods/worker_patch.js,
// which pulls in the modified MarcFile.js and the submodule's vcdiff.js
const LIBRARIES = ['/save-as/save-as.js'];
for (let i = 0; i < LIBRARIES.length; i++) {
    let script = document.createElement('script');
    script.src = LIBRARIES[i];
    script.type = 'text/javascript';
    script.async = false;
    document.head.appendChild(script);
}

// Warm up the download service worker now: one registered only at download
// time can be too fresh to reliably intercept the navigation that follows
getDownloadServiceWorker().catch(() => {});

function getLanguageName(loc, languageCode) {
    const nameGenerator = new Intl.DisplayNames(loc, { type: 'language' });
    const displayName = nameGenerator.of(languageCode);
    return displayName[0].toUpperCase() + displayName.substring(1);
}
</script>

<script>
// Patcher settings
const REPO_ORG = 'AGTTeam';
const CORS_PROXY = 'https://cors.agtteam.net/';
import ALL_PATCH_DATA from '/assets/patch-data.json';
import ALL_PLATFORM_DATA from '/assets/platform-data.json';

var localeVal = '';
var optionVal = '';
const notice = ref('rom-patcher-get-started');
const noticeDict = ref({});
const isPatching = ref(false);
const patcherAnimation = ref(null);
let patcherAnimationSrc = null;

function pickPatcherAnimation() {
    if (Array.isArray(patcherAnimationSrc)) {
        if (patcherAnimationSrc.length === 0)
            return null;
        return patcherAnimationSrc[Math.floor(Math.random() * patcherAnimationSrc.length)];
    }
    return patcherAnimationSrc;
}

// RomPatcher data variables
let romLoaded, isBadRom, isEncryptedRom, patchData, platformData, platformName, loadingFile, patchWorker;

function setup(game, platform) {
    patchData = ALL_PATCH_DATA[game].platforms[platform];
    patcherAnimationSrc = ALL_PATCH_DATA[game].patcher_animation || null;
    platformData = ALL_PLATFORM_DATA[platform];
    platformName = platform;
    romLoaded = false;
    if (patchWorker)
        patchWorker.postMessage({ action: 'reset' });
}

function getWorker() {
    if (!patchWorker)
        patchWorker = new Worker('/patcher-mods/worker_patch.js');
    return patchWorker;
}

// Sends one request to the patch worker and resolves with its reply.
// The UI only ever has one request in flight (loadingFile/isPatching guards).
function workerRequest(message, transfer, onProgress) {
    return new Promise((resolve, reject) => {
        const worker = getWorker();
        worker.onmessage = (event) => {
            if (event.data.progress) {
                if (onProgress)
                    onProgress(event.data);
                return;
            }
            if (event.data.success)
                resolve(event.data);
            else
                reject(new Error(event.data.error));
        };
        worker.onerror = (event) => {
            reject(new Error(event.message || 'Patch worker failed'));
        };
        worker.postMessage(message, transfer || []);
    });
}

// Available patches
function AVAILABLE_PATCHES(locale) {
    localeVal = locale
    if (!(locale in patchData.available_patches))
        return [];
    return [ patchData.available_patches[locale].reverse()[0] ];
}

// Fetches a repair/decrypt patch and applies it in the worker, replacing
// the worker's ROM with the result. Throws '' if a notice was already shown.
async function applyRepairPatch(fetchPatch, noticeApplying, noticeApplied) {
    const arrayBuffer = await fetchPatch(); // shows its own fetch notice
    if (arrayBuffer == null)
        throw ''; // fetchFile already showed an error notice
    showNotice('info', noticeApplying);
    await workerRequest({ action: 'apply', patchBuffer: arrayBuffer, validateChecksums: false, replaceRom: true }, [arrayBuffer]);
    showNotice('info', noticeApplied);
}

// Gets the name of the file needed to be fetched to patch
function getFileName(version) {
    optionVal = '';
    let options = '';
    if (patchData.options != undefined) {
        patchData.options.forEach((option) => {
            const optionElement = document.querySelector('input[name="' + option.name + '"]:checked');
            options += '-' + optionElement.value;
            optionVal += '-' + optionElement.dataset.val;
        });
    }
    return patchData.patch_prefix + '-v' + version + options + '.xdelta';
}

// Returns the versioned patch file with the given name from the GitHub org
function parsePatchFile(fileName, version) {
    showNotice('info', 'rom-patcher-downloading-patch');

    // Download from GitHub
    let encodedUri = (CORS_PROXY + 'https://github.com/' + REPO_ORG + '/' + patchData.data_repo + '/releases/download/' + version + '/' + fileName);
    if (import.meta.dev) {
        encodedUri = '/patches/' + fileName;
    }
    return fetchFile(encodedUri);
}

function parseDecryptFile() {
    showNotice('info', 'rom-patcher-encrypted-rom');
    return fetchFile('/patches/' + patchData.decrypt_patch);
}
function parseRepairFile() {
    showNotice('info', 'rom-patcher-bad-rom');
    return fetchFile('/patches/' + patchData.repair_patch);
}

function fetchFile(encodedUri) {
    let fileUri = decodeURI(encodedUri.trim());
    return fetch(fileUri).then(result => result.arrayBuffer()) // Gets the response and returns it as a blob
        .then(arrayBuffer => {
            return arrayBuffer;
        }).catch(function (error) {
            console.error(error);
            showNotice('error', 'rom-patcher-fetch-error', { error: error.message })
            return undefined;
        });
}

// Returns the active download service worker, registering it if needed.
// It streams the patched ROM straight to the browser's download manager,
// avoiding the multi-GB Blob + object URL downloads that fail intermittently.
async function getDownloadServiceWorker() {
    if (!('serviceWorker' in navigator))
        return null;
    const registration = await navigator.serviceWorker.register('/patcher-mods/sw_download.js', { scope: '/patcher-mods/' });
    if (registration.active)
        return registration.active;
    const worker = registration.installing || registration.waiting;
    await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('service worker activation timed out')), 10000);
        worker.addEventListener('statechange', () => {
            if (worker.state === 'activated') {
                clearTimeout(timer);
                resolve();
            } else if (worker.state === 'redundant') {
                clearTimeout(timer);
                reject(new Error('service worker was discarded'));
            }
        });
    });
    return registration.active;
}

// Registers the download with the service worker, then navigates a hidden
// iframe to it so the streamed response lands in the download manager
let downloadIframe = null;
async function startStreamDownload(serviceWorker, fileName, fileSize) {
    const dataChannel = new MessageChannel();
    const ackChannel = new MessageChannel();
    const id = Date.now() + '-' + Math.floor(Math.random() * 1e9);
    await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('service worker did not acknowledge the download')), 5000);
        ackChannel.port1.onmessage = () => { clearTimeout(timer); resolve(); };
        serviceWorker.postMessage({ action: 'prepare-download', id: id, fileName: fileName, fileSize: fileSize }, [dataChannel.port2, ackChannel.port2]);
    });
    // the iframe stays attached: the download manager may still re-request
    // the URL after streaming finishes, so only the previous one is removed
    if (downloadIframe)
        downloadIframe.remove();
    downloadIframe = document.createElement('iframe');
    downloadIframe.style.display = 'none';
    downloadIframe.src = '/patcher-mods/download?id=' + id;
    document.body.appendChild(downloadIframe);
    return { port: dataChannel.port1 };
}

// Saves the patched ROM held by the patch worker: big files are streamed
// through the download service worker when possible, since multi-GB Blob
// downloads fail intermittently; everything else uses the Blob download
const STREAM_DOWNLOAD_THRESHOLD = 1024 * 1024 * 1024;
async function downloadPatchedRom(fileName, fileSize) {
    let serviceWorker = null;
    let download = null;
    try {
        if (fileSize >= STREAM_DOWNLOAD_THRESHOLD) {
            serviceWorker = await getDownloadServiceWorker();
            if (serviceWorker)
                download = await startStreamDownload(serviceWorker, fileName, fileSize);
        }
    } catch (error) {
        console.error('Stream download unavailable, falling back to Blob download', error);
    }

    if (download) {
        // ping the service worker during the download so the browser
        // doesn't stop it for being idle mid-stream
        const keepAlive = setInterval(() => serviceWorker.postMessage({ action: 'keepalive' }), 10000);
        // if the browser never starts pulling data (e.g. the service worker
        // failed to intercept the download), give up instead of hanging
        let lastActivity = Date.now();
        let watchdogTimer = null;
        const watchdog = new Promise((resolve, reject) => {
            watchdogTimer = setInterval(() => {
                if (Date.now() - lastActivity > 30000)
                    reject(new Error('The download did not start or stalled'));
            }, 5000);
        });
        try {
            await Promise.race([watchdog, workerRequest({ action: 'save-stream', port: download.port }, [download.port], (progress) => {
                lastActivity = Date.now();
                showNotice('info', 'rom-patcher-saving-rom', { percent: Math.min(progress.percent, 100) });
            })]);
        } finally {
            clearInterval(keepAlive);
            clearInterval(watchdogTimer);
        }
        showPatchedNotice();
    } else {
        const result = await workerRequest({ action: 'save-blob' });
        showPatchedNotice();
        saveAs(result.blob, fileName);
    }
}

// Show the appropriate success notice once the patched ROM has been saved
function showPatchedNotice() {
    if (isBadRom) {
        if (patchData.bad_rom_string != undefined)
            showNotice('info', patchData.bad_rom_string)
        else
            showNotice('info', 'rom-patcher-bad-rom-warn')
    } else if (isEncryptedRom) {
        if (patchData.encrypted_rom_string != undefined)
            showNotice('info', patchData.encrypted_rom_string)
        else
            showNotice('info', 'rom-patcher-encrypted-rom-warn')
    } else {
        showNotice('info', 'rom-patcher-success')
    }

    isPatching.value = false;
}

// Show the patcher status notice at the top of the patcher
function showNotice(noticeType, noticeMessage, noticeVals = {}) {
    let patcherElement = document.getElementById('patcher-notice');
    if (noticeType === 'error') {
        isPatching.value = false;
    }
    notice.value = noticeMessage;
    noticeDict.value = noticeVals;
    console.log(noticeMessage + ":" + JSON.stringify(noticeVals));
    patcherElement.classList = noticeType + '-notice';
}

// Returns the selected version
function getSelectedVersion() {
    return document.getElementById('patcher-version-dropdown').value;
}

export default {
    methods: {
        patchRom: async function () {
            if (loadingFile || isPatching.value)
                return;
            let version = getSelectedVersion();

            // if a rom file has not been selected, return with an error
            if (!romLoaded) {
                showNotice('error', 'rom-patcher-choose-rom-first');
                return;
            }

            patcherAnimation.value = pickPatcherAnimation();
            isPatching.value = true;
            isBadRom = false;
            isEncryptedRom = false;
            if (patchData.sha_checks) {
                let romSha;
                try {
                    showNotice('info', 'rom-patcher-verifying-rom', { percent: 0 });
                    romSha = (await workerRequest({ action: 'sha' }, [], (progress) => {
                        showNotice('info', 'rom-patcher-verifying-rom', { percent: Math.min(progress.percent, 100) });
                    })).sha.toUpperCase();
                } catch (error) {
                    console.error(error);
                    showNotice('error', 'rom-patcher-sha-calc-failed');
                    return;
                }

                if (romSha !== patchData.required_rom_sha) {
                    if (romSha === patchData.bad_rom_sha) {
                        isBadRom = true;
                        if (!patchData.fix_bad_rom) {
                            showNotice('error', 'rom-patcher-bad-rom-error');
                            return;
                        }
                        try {
                            await applyRepairPatch(parseRepairFile, 'rom-patcher-repair', 'rom-patcher-repair-applied');
                        } catch (error) {
                            if (error !== '')
                                showNotice('error', 'rom-patcher-repair-error', { error: (error && error.message) || String(error) });
                            return;
                        }
                    } else if (romSha === patchData.encrypted_rom_sha) {
                        isEncryptedRom = true;
                        if (!patchData.fix_encrypted_rom) {
                            showNotice('error', 'rom-patcher-encrypted-rom-error');
                            return;
                        }
                        try {
                            await applyRepairPatch(parseDecryptFile, 'rom-patcher-decrypting', 'rom-patcher-decrypt-applied');
                        } catch (error) {
                            if (error !== '')
                                showNotice('error', 'rom-patcher-decrypt-error', { error: (error && error.message) || String(error) });
                            return;
                        }
                    } else {
                        showNotice('error', 'rom-patcher-invalid-rom-error');
                        return;
                    }
                }
            }

            const fileName = getFileName(version);
            const arrayBuffer = await parsePatchFile(fileName, version); // shows its own fetch notice
            if (arrayBuffer == null) {
                showNotice('error', 'rom-patcher-patch-failed-retrieve');
                return;
            }

            showNotice('info', 'rom-patcher-patching-rom', { patch: fileName });
            let patchName = localeVal + optionVal + '-v' + version;
            // This probably shouldn't be hardcoded
            if (platformName == 'ndsjp') {
                patchName = 'jp-hack-v' + version;
            }
            try {
                const result = await workerRequest({ action: 'apply', patchBuffer: arrayBuffer, validateChecksums: false, patchName: patchName }, [arrayBuffer]);
                await downloadPatchedRom(result.fileName, result.fileSize);
            } catch (error) {
                console.error(error);
                showNotice('error', 'rom-patcher-patch-error', { error: (error && error.message) || String(error) });
            }
        },
        selectFile: async function (event) {
            const file = event.target.files && event.target.files[0];
            if (!file)
                return;
            loadingFile = true;
            romLoaded = false;
            showNotice('info', 'rom-patcher-loading-file');
            try {
                // read the file here and stream transferred chunks to the worker:
                // reading the File inside the worker stalls silently on Chrome
                const CHUNK_SIZE = 128 * 1024 * 1024;
                await workerRequest({ action: 'load-begin', fileName: file.name, fileSize: file.size });
                for (let offset = 0; offset < file.size; offset += CHUNK_SIZE) {
                    const chunk = await file.slice(offset, Math.min(offset + CHUNK_SIZE, file.size)).arrayBuffer();
                    await workerRequest({ action: 'load-chunk', offset: offset, chunk: chunk }, [chunk]);
                    showNotice('info', 'rom-patcher-loading-file-percent', { percent: Math.min(Math.floor((offset + CHUNK_SIZE) / file.size * 100), 100) });
                }
                const result = await workerRequest({ action: 'load-end' });
                if (result.isZip) {
                    showNotice('error', 'rom-patcher-invalid-rom-select', { extension: platformData.extension });
                    return;
                }
                romLoaded = true;
                showNotice('info', 'rom-patcher-file-loaded');
            } catch (error) {
                console.error(error);
                const message = (error && error.message) ? error.message : String(error);
                if (/allocation failed|out of memory/i.test(message)) {
                    showNotice('error', 'rom-patcher-load-too-large');
                } else {
                    showNotice('error', 'rom-patcher-load-error', { error: message });
                }
            } finally {
                loadingFile = false;
            }
        }
    }
}
</script>