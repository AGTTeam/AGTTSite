<template>
    <h2 class="top-title">{{ $t('upcoming-translations') }}</h2>
    <div id="translations-grid">
        <TranslationPoster v-for="translation of wip_translations" :key="translation.id" :translation="translation" />
    </div>
    <h2>{{ $t('our-translations') }}</h2>
    <div id="translations-grid">
        <TranslationPoster v-for="translation of translations" :key="translation.id" :translation="translation" />
    </div>
</template>

<style scoped>
#translations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 0.5rem;
    justify-items: left;
}

/* Less than 580px */
@media screen and (max-width: 650px) {
    #translations-grid {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}

h2.top-title {
    margin: 0;
    margin-bottom: 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
}
</style>

<script>
import ALL_PATCH_DATA from '/assets/patch-data.json';
let wip_translations = [];
let translations = [];
for (const [key, value] of Object.entries(ALL_PATCH_DATA)) {
    if (value.page == null || value.tags.includes("[status-coming-soon]")) {
        wip_translations.push(value);
    } else {
        translations.push(value);
    }
}
export default {
    data() {
        return {
            translations: translations,
            wip_translations: wip_translations
        }
    }
}
</script>
