<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const route = useRoute()
const props = defineProps({
    url: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <NuxtLink :to="`/${route.params.game}${url}`">{{ text }}</NuxtLink>
</template>
