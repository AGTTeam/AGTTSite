<script setup>
const route = useRoute()
import ALL_PATCH_DATA from '/assets/patch-data.json';
const PATCH_DATA = ALL_PATCH_DATA[route.params.game];
const props = defineProps({
    platform: {
        type: String,
        required: false,
        default: ""
    },
    cheats: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <div v-if="platform != '' && route.params.platform == platform">
        <slot />
    </div>
    <div v-if="cheats && PATCH_DATA.platforms[route.params.platform].cheats != undefined">
        <slot />
    </div>
</template>
