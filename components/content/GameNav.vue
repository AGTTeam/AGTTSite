<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
const route = useRoute()
import ALL_PATCH_DATA from '/assets/patch-data.json';
const defaultPlatform = ALL_PATCH_DATA.defaults[route.params.game];
const PATCH_DATA = ALL_PATCH_DATA.patches[route.params.game + "-" + defaultPlatform];
</script>

<template>
    <div class="game-nav">
        <div class="nav-content">
            <slot />
        </div>
        <div class="nav-buttons">
            <ButtonLink :link="localePath('/' + route.params.game + '/guide/' + defaultPlatform)" fullwidth type="top-piece" color="red" icon="fa6-solid:book">
                {{ $t('setup-guide') }}
            </ButtonLink>
            <ButtonLink :link="localePath('/' + route.params.game + '/patch/' + defaultPlatform)" fullwidth type="mid-piece" color="blue" icon="fa6-solid:file-import">
                {{ $t('rom-patcher') }}
            </ButtonLink>
            <ButtonLink :link="PATCH_DATA.mega_link" fullwidth external type="bottom-piece" color="sl-green" icon="fa6-solid:download">
                {{ $t('download-patch') }}
            </ButtonLink>
            <div id="nav-or">&mdash;</div>
            <ButtonLink :link="'http://github.com/AGTTeam/' + PATCH_DATA.tool_repo" fullwidth external type="top-piece" color="black" icon="fa6-brands:github">
                {{ $t('sources-tools') }}
            </ButtonLink>
        </div>
    </div>
</template>

<style scoped>
.game-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.game-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.nav-left .drop-shadow {
    filter: drop-shadow(0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3));
}

.nav-right .nav-content {
    width: 100%;
}

.nav-content .button {
    margin: 1rem;
}

.game-nav .nav-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.nav-buttons #nav-or {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0.2rem 0;
}

/* Hide left nav if screen size <= 400px */
@media screen and (max-width: 500px) {
    .game-nav .nav-left {
        display: none;
    }

    .game-nav .nav-right {
        max-width: 85vw;
        width: 100% !important;
    }
}
</style>
