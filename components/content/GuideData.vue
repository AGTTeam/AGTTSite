<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const route = useRoute()
defineProps(['data'])
</script>

<template>
    <span>{{ $t(route.params.game + "-" + (data ?? 'title')) }}</span>
</template>
