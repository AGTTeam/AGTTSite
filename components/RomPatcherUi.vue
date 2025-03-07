<template>
    <div v-if="notice" id="patcher-notice" v-html="$t(notice, noticeDict.value)"></div>
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
const LIBRARIES = ['/patcher/js/MarcFile.js', '/patcher/js/zip.js/inflate.js', '/patcher/js/crc.js',
'/patcher/js/formats/vcdiff.js', '/patcher/js/formats/zip.js', '/save-as/save-as.js'];
for (let i = 0; i < LIBRARIES.length; i++) {
    let script = document.createElement('script');
    script.src = LIBRARIES[i];
    script.type = 'text/javascript';
    script.async = false;
    document.head.appendChild(script);
}

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
const noticeDict = {};

// RomPatcher data variables
let romFile, patchFile, patch, headerSize, romSha, isBadRom, repairPatchFile, repairPatch, patchData, platformData, platformName, loadingFile;

function setup(game, platform) {
    patchData = ALL_PATCH_DATA[game].platforms[platform];
    platformData = ALL_PLATFORM_DATA[platform];
    platformName = platform;
}

// Available patches
function AVAILABLE_PATCHES(locale) {
    localeVal = locale
    if (!(locale in patchData.available_patches))
        return [];
    return [ patchData.available_patches[locale].reverse()[0] ];
}

// Parse the ROM zip and header data
function _parseROM() {
    if (romFile.readString(4).startsWith(ZIP_MAGIC)) {
        ZIPManager.parseFile(romFile);
    } else {
        if ((headerSize = canHaveFakeHeader(romFile))) {
        } else if ((headerSize = hasHeader(romFile))) {
        }
    }
    showNotice('info', 'rom-patcher-file-loaded');
    loadingFile = false;
}

function getRomSha(romFile) {
    return window.crypto.subtle.digest('SHA-256', romFile._u8array.buffer)
        .then(romHash => {
            let hashBytes = new Uint8Array(romHash);
            let hexString = '';
            for (let i = 0; i < hashBytes.length; i++) {
                hexString += padZeroes(hashBytes[i], 1);
            }
            return hexString;
        })
        .catch(function () {
            showNotice('error', 'rom-patcher-sha-calc-failed');
            return '';
        });
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

function applyPatch(patch, rom, validateChecksums, name) {
    if (patch && rom) {
        showNotice('info', 'rom-patcher-applying-patch');

        // Patch the rom
        try {
            patch.apply(rom, validateChecksums);
            return preparePatchedRom(rom, patch.apply(rom, validateChecksums), name);
        } catch (error) {
            console.error(error);
            showNotice('error', 'rom-patcher-patch-error', { error: error.message });
        }

    } else {
        if (patch === undefined) {
            showNotice('error', 'rom-patcher-patch-failed-retrieve');
        } else {
            showNotice('error', 'rom-patcher-choose-rom-first');
        }
    }
    return null;
}

// Prepare the final patched ROM
function preparePatchedRom(originalRom, patchedRom, name) {
    patchedRom.fileName = originalRom.fileName.replace(/\.([^\\.]*?)$/, ' (' + name + ').$1');
    // Change the mime type to avoid issues on mobile adding a .txt to the file extension
    patchedRom.fileType = "data:attachment/plain";
    return patchedRom;
}

// Prompt the user to save the patched ROM file
function saveRomFile(patchedRom) {
    if (isBadRom) {
        if (patchData.bad_rom_string != undefined)
            showNotice('info', patchData.bad_rom_string)
        else
            showNotice('info', 'rom-patcher-bad-rom-warn')
    } else {
        showNotice('info', 'rom-patcher-success')
    }

    patchedRom.save();
}

function canHaveFakeHeader(romFile) {
    if (romFile.fileSize <= 0x600000) {
        for (let i = 0; i < HEADERS_INFO.length; i++) {
            if (HEADERS_INFO[i][0].test(romFile.fileName) && (romFile.fileSize % HEADERS_INFO[i][2] === 0)) {
                return HEADERS_INFO[i][1];
            }
        }
    }
    return 0;
}

function hasHeader(romFile) {
    if (romFile.fileSize <= 0x600200) {
        if (romFile.fileSize % 1024 === 0)
            return 0;

        for (let i = 0; i < HEADERS_INFO.length; i++) {
            if (HEADERS_INFO[i][0].test(romFile.fileName) && (romFile.fileSize - HEADERS_INFO[i][1]) % HEADERS_INFO[i][1] === 0) {
                return HEADERS_INFO[i][1];
            }
        }
    }
    return 0;
}

// Show the patcher status notice at the top of the patcher
function showNotice(noticeType, noticeMessage, noticeVals = {}) {
    let patcherElement = document.getElementById('patcher-notice');
    notice.value = noticeMessage;
    noticeDict.value = noticeVals;
    console.log(noticeMessage + ":" + JSON.stringify(noticeDict));
    patcherElement.classList = noticeType + '-notice';
}

// Returns the selected version
function getSelectedVersion() {
    return document.getElementById('patcher-version-dropdown').value;
}

export default {
    methods: {
        patchRom: async function () {
            if (loadingFile)
                return;
            let version = getSelectedVersion();
            
            // if a rom file has not been selected, return with an error
            if (!romFile) {
                showNotice('error', 'rom-patcher-choose-rom-first');
                return;
            }

            isBadRom = false;
            if (patchData.sha_checks) {
                const SHA_CHECK_PROMISE = getRomSha(romFile).then(sha => {
                    romSha = sha.toUpperCase();
                });

                await SHA_CHECK_PROMISE;

                if (romSha !== patchData.required_rom_sha) {
                    if (romSha === '') {
                        showNotice('error', 'rom-patcher-sha-calc-failed');
                        return;
                    }
                    if (romSha === patchData.bad_rom_sha) {
                        isBadRom = true;
                        if (!patchData.fix_bad_rom) {
                            showNotice('error', 'rom-patcher-bad-rom-error');
                            return;
                        } else {
                            const REPAIR_ROM = parseRepairFile().then(repairArrayBuffer => {
                                if (repairArrayBuffer == null)
                                    return Promise.reject('');
                                return new MarcFile(repairArrayBuffer);
                            }).then(parsedRepairPatch => {
                                repairPatchFile = parsedRepairPatch;
                                repairPatchFile.littleEndian = false;
                                repairPatchFile.fileName = patchData.repair_patch;

                                let header = repairPatchFile.readString(6);
                                if (header.startsWith(ZIP_MAGIC)) {
                                    repairPatch = false;
                                    ZIPManager.parseFile(repairPatchFile);
                                } else {
                                    repairPatch = parseVCDIFF(repairPatchFile);
                                }
                            }).then(() => {
                                showNotice('info', 'rom-patcher-repair');
                                return applyPatch(repairPatch, romFile, false, 'repaired');
                            }).then(repairedRom => {
                                romFile = repairedRom;
                                showNotice('info', 'rom-patcher-repair-applied')
                            }).catch((error) => {
                                showNotice('error', 'rom-patcher-repair-error', { error: error });
                            });

                            await REPAIR_ROM;
                        }
                    } else {
                        showNotice('error', 'rom-patcher-invalid-rom-error');
                        return;
                    }
                }
            }
            parsePatchFile(getFileName(version), version).then(arrayBuffer => {
                if (arrayBuffer == null)
                    return Promise.reject('');
                return new MarcFile(arrayBuffer);
            }).then(parsedFile => {
                patchFile = parsedFile;
                patchFile.littleEndian = false;
                patchFile.fileName = getFileName(version);

                let header = patchFile.readString(6);
                if (header.startsWith(ZIP_MAGIC)) {
                    patch = false;
                    ZIPManager.parseFile(patchFile);
                } else {
                    patch = parseVCDIFF(patchFile);
                }
            }).then(() => {
                showNotice('info', 'rom-patcher-patching-rom', { patch: getFileName(version) })
                let patchName = localeVal + optionVal + '-v' + version;
                // This probably shouldn't be hardcoded
                if (platformName == 'ndsjp') {
                    patchName = 'jp-hack-v' + version;
                }
                return applyPatch(patch, romFile, false, patchName);
            }).then(patchFile => {
                saveRomFile(patchFile);
            }).catch((error) => {
                if (typeof error === 'string' && error.startsWith('err-'))
                    showNotice('error', error.substring(4));
                else if (error != '')
                    showNotice('error', 'rom-patcher-generic-error', { error: error });
            });
            return;
        },
        selectFile: async function (event) {
            try {
                loadingFile = true;
                showNotice('info', 'rom-patcher-loading-file');
                romFile = new MarcFile(event.target, _parseROM);
            } catch (error) {
                showNotice('error', 'rom-patcher-invalid-rom-select', { extension: platformData.extension });
                romFile = null;
                loadingFile = false;
                return;
            }
        }
    }
}
</script>