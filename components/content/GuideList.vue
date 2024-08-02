<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const route = useRoute()
</script>

<template>
    <ol>
        <ContentList :path="`/guide/${route.params.platform}/`" v-slot="{ list }">
            <li v-for="guide in list.filter(g => g.navigation && g.locale == locale)">
                <NuxtLink :to="`${locale == 'en' ? '' : '/' + locale}/${route.params.game}/guide/${route.params.platform}${guide.navigation.current}`">{{ guide.title }}</NuxtLink>
            </li>
        </ContentList>
    </ol>
</template>

<script>
</script>