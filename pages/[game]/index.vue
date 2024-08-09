<script setup>
const { locale } = useI18n()
const route = useRoute()
definePageMeta({
    layout: "game"
})
import ALL_PATCH_DATA from '/assets/patch-data.json';
if (!(route.params.game in ALL_PATCH_DATA)) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    });
}
</script>

<template>
    <div>
        <NuxtLayout>
            <div id="dual-columns">
                <div class="column">
                    <div id="project-credits">
                        <ContentDoc :path="`/game/${route.params.game}/credits/${locale}`" />
                    </div>
                </div>
                <div class="column">
                    <div class="title-graphic">
                        <img class="graphic-image" :src="`/images/${route.params.game}/game-logo.png`" />
                    </div>
                    <div id="project-info">
                        <ContentDoc :path="`/game/${route.params.game}/${locale}`" />
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
#dual-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
}

.column {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.title-graphic {
    /* filter: drop-shadow(0.12em 0.12rem 0.12rem rgba(0, 0, 0, 0.4)); */
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.graphic-image {
    height: auto;
    max-width: 40em;
}

/* Less than 1200px */
@media screen and (max-width: 1200px) {
    #dual-columns {
        flex-direction: column-reverse;
    }

    .column {
        width: 95vw;
    }
}

/* Less than 680px */
@media screen and (max-width: 680px) {
    .ds {
        display: none;
    }

    .column {
        width: 90vw;
    }
}

/* Less than 580px */
@media screen and (max-width: 580px) {
    .column {
        width: 85vw;
    }
}
</style>
