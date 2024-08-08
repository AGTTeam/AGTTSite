<script setup>
const { locale } = useI18n()
const route = useRoute()
definePageMeta({
    layout: "guide"
})
import ALL_PATCH_DATA from '/assets/patch-data.json';
if (!(route.params.game in ALL_PATCH_DATA) || ALL_PATCH_DATA[route.params.game].page == undefined || ALL_PATCH_DATA[route.params.game].platforms[route.params.platform] == undefined) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    });
}
</script>

<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/game/${route.params.game}/patch/${locale}`" />
            <br/>
            <ClientOnly fallbackTag="span">
                <RomPatcherUi />
                <template #fallback>
                    <p>{{ $t('patch-loading') }}</p>
                </template>
            </ClientOnly>
            <template #sidebar>
                <ContentDoc :path="`/game/${route.params.game}/patch/sidebar/${locale}`" :head="false" />
                <ContentDoc :path="`/patch/sidebar/${locale}`" :head="false" />
            </template>
        </NuxtLayout>
    </div>
</template>

<style scoped>
#dual-column {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    justify-content: space-between;
}

#dual-column .content {
    width: 70%;
    padding: 1rem;
}

#dual-column .sidebar {
    width: 20%;
    padding: 1rem;
}
</style>
