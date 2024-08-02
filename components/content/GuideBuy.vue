<script setup>
const { locale } = useI18n()
const route = useRoute()
</script>

<template>
    <ContentDoc :path="`${route.params.game}/buy/${locale}`" />
</template>
