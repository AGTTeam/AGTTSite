<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
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
            <ContentDoc :path="`guide/${route.params.platform}/${route.params.slug}/${locale}`">
                <template v-slot="{ doc }">
                    <h1 v-if="doc.navigation"> {{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                    <GuidePagination :doc="doc" :game="route.params.game" :platform="route.params.platform" />
                </template>
                <template #not-found>
                    <h1>{{ $t('guide-invalid-page') }}</h1>
                    <p>{{ $t('guide-invalid-page-p') }}</p>
                    <ButtonLink :link="localePath(`/${route.params.game}/guide/${route.params.platform}`)" color="red" icon="fa6-solid:book">{{ $t('guide-back-to-start') }}
                    </ButtonLink>
                </template>
            </ContentDoc>
            <template #sidebar>
                <ContentDoc :path="`guide/${route.params.platform}/sidebar/${locale}`" :head="false" />
            </template>
        </NuxtLayout>
    </div>
</template>
