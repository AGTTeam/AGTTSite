<script setup>
const { locale } = useI18n()
const route = useRoute()
definePageMeta({
    layout: "guide"
})
import ALL_PATCH_DATA from '/assets/patch-data.json';
let patchName = route.params.game + '-' + route.params.platform;
if (!(patchName in ALL_PATCH_DATA.patches) || ALL_PATCH_DATA.patches[patchName].page == null) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    });
}
</script>

<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`guide/${route.params.platform}/${locale}`" v-slot="{ doc }">
                <h1 v-if="doc.navigation"> {{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
                <GuidePagination :doc="doc" :game="route.params.game" :platform="route.params.platform" />
            </ContentDoc>
            <template #sidebar>
                <ContentDoc :path="`guide/${route.params.platform}/sidebar/${locale}`" :head="false" />
            </template>
        </NuxtLayout>
    </div>
</template>
