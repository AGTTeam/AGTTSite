<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
</script>

<template>
    <div class="translation">
        <div class="about">
            <div :class="'title ' + translation.color">
                <NuxtLink v-if="translation.page != null" :to="localePath(translation.page)">{{ $t(translation.title) }}</NuxtLink>
                <span v-else>{{ $t(translation.title) }}</span>
            </div>
            <div v-if="translation.tags" class="tags">
                <span class="tag" v-for="tag of translation.tags">
                    <span v-if="tag.startsWith('[')">{{ $t(tag.substring(1, tag.length - 1)) }}</span>
                    <span v-else>{{ tag }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.translation {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.translation .about {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-content: left;
    margin-left: 0.5rem;
    width: 100%;
}

.translation .status {
    display: flex;
    margin-right: 0.5rem;
    justify-content: center;
    align-content: center;
    min-width: 180px;
}

.about .title {
    font-size: 1.2rem;
    font-weight: bold;
}

.about .title a {
    color: black;
}

.about .tags {
    margin: 0.35rem 0;
}

.about .tags .tag {
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.1rem 0.25rem;
    margin: 0 0.2rem;
}

.about .tagline {
    font-weight: bold;
    margin: 0.5rem 0;
}

.about .description {
    margin: 0.25rem 0;
}

.about .button {
    display: flex;
    justify-self: flex-end;
    width: 100%;
    justify-content: flex-end;
    align-self: flex-end;
    margin-top: auto;
}

.about .coming-soon {
    font-weight: bold;
}

.red a {
    color: var(--main-red) !important;
}

.red {
    color: var(--main-red) !important;
}

.blue a {
    color: var(--main-blue) !important;
}

.blue {
    color: var(--main-blue) !important;
}

/* Less than 650px */
@media screen and (max-width: 650px) {
    .translation {
        flex-direction: column;
        width: fit-content !important;
    }

    .translation .poster {
        justify-content: center;
        margin: auto;
        margin-bottom: 0.5rem;
    }

    .translation .title {
        justify-content: center;
    }

    .translation .about {
        margin: auto;
    }

    .about .tags {
        display: none;
    }

    .about .button {
        display: none;
    }
}
</style>

<script>
import ButtonLink from './content/ButtonLink.vue';
export default {
    props: {
        translation: {
            type: Object,
            required: true
        }
    },
    components: { ButtonLink }
}
</script>