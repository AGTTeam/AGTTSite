<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const route = useRoute()
defineProps(['data'])
import ALL_PATCH_DATA from '/assets/patch-data.json';
const defaultPlatform = ALL_PATCH_DATA.platforms[route.params.game][0];
const PATCH_DATA = ALL_PATCH_DATA.patches[route.params.game + "-" + defaultPlatform];
</script>

<template>
    <a v-if="data == 'vc-image'" :href="'/images/' + route.params.game + '/virtual-console-icon.png'">this image</a>
    <span v-else-if="data == 'year'">{{ PATCH_DATA[data] }}</span>
    <span v-else>{{ $t(route.params.game + "-" + (data ?? 'title')) }}</span>
</template>
