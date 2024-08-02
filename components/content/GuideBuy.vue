<script setup>
const { locale } = useI18n()
const route = useRoute()
</script>

<template>
    <ContentDoc :path="`/game/${route.params.game}/buy/${locale}`" />
</template>
