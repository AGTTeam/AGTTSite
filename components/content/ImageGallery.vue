<template>
    <div class="gallery">
        <div class="buttons">
            <button @click="changeImage(-1)">
                <Icon class="change-image" name="fa6-solid:chevron-left" />
            </button>
            <span>{{ currentImage + 1 }} / {{ images.length }}</span>
            <button @click="changeImage(1)">
                <Icon class="change-image" name="fa6-solid:chevron-right" />
            </button>
        </div>
        <div class="image">
            <img v-for="(image, index) in images" :key="index.alt" :alt="image.alt" :src="image.url" :style="{ display: index === currentImage ? 'block' : 'none' }" />
            <br />
            <span v-for="(image, index) in images" :style="{ display: index === currentImage ? 'block' : 'none' }">{{ image.alt }}</span>
        </div>
    </div>
</template>

<script setup>
const { images } = defineProps({
    images: {
        type: Array,
        required: true
    }
})
const currentImage = ref(0);
// const image = ref(images[currentImage.value]);

const changeImage = (direction) => {
    if (direction > 0) {
        currentImage.value = currentImage.value === images.length - 1 ? 0 : currentImage.value + 1;
    } else {
        currentImage.value = currentImage.value === 0 ? images.length - 1 : currentImage.value - 1;
    }
}
</script>

<style scoped>
img {
    padding: auto;
    height: auto;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.image {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buttons {
    margin: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.buttons .change-image {
    font-size: 1.4rem;
    margin: 0 0.75rem;
    padding: 0.6rem;
    color: white;
    background-color: var(--main-blue);
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
}

.buttons .change-image:hover {
    filter: brightness(0.8);
}
</style>
