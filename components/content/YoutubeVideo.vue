<template>
    <!-- Youtube video iframe -->
    <div class="youtube-video">
        <iframe id="ytplayer"
            :src="`https://www.youtube.com/embed/${video}`" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
    video: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.youtube-video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
}

.youtube-video iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>