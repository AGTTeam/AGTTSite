<template>
    <div v-if="type == 'nav'" class="nav">
        <NuxtLink v-if="showHome == true" href="/" rel="me" style="color:var(--main-green)">
            <Icon name="fa6-solid:house" class="nav-icon" />
        </NuxtLink>
        <NuxtLink v-for="social in socials.filter(s => s.display.nav)" :href="social.link" rel="me" :style="`color: ${social.color}`">
            <Icon :name="social.icon" class="nav-icon" />
        </NuxtLink>
    </div>
    <div v-else-if="type == 'stack'" class="stack">
        <ButtonLink :link="localePath(stackTopper.link)" color="red" type="top-piece" :icon="stackTopper.icon" fullwidth>
            {{ $t(stackTopper.locale) }}
        </ButtonLink>
        <ButtonLink v-for="social in socials.filter(s => s.display.row)" external :icon="social.icon" :link="social.link" rel="me"
            :rgb-color="social.color" :type="socials.filter(s => s.display.row).indexOf(social) === (socials.filter(s => s.display.row).length - 1) ? 'bottom-piece' : 'mid-piece'" fullwidth>
            {{ $t(social.locale) }}
        </ButtonLink>
    </div>
    <ButtonRow v-else>
        <ButtonLink v-for="social in socials.filter(s => s.display.row)" external :icon="social.icon" :link="social.link" rel="me"
            :rgb-color="social.color">
            {{ $t(social.locale) }}
        </ButtonLink>
    </ButtonRow>
</template>

<script setup>
import socials from '/assets/social-links.json'

const { locale } = useI18n()
const localePath = useLocalePath()

const { type, stackTopper } = defineProps({
    type: {
        type: String,
        required: false,
        default: 'row'
    },
    stackTopper: {
        type: Object,
        required: false,
        default: {
            link: '/',
            icon: 'fa6-solid:house',
            locale: 'home'
        }
    },
    showHome: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<style scoped>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.7rem;
    font-size: 2.3rem;
    /* filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3)); */
}

.nav a:hover {
    filter: drop-shadow(0 0 0.18rem white);
}

.nav a {
    max-height: 46px;
}

.stack {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3));
}
</style>