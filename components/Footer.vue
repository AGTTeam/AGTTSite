<template>
    <footer>
        <div id="copyright">
            <div>{{ $t('website') }} &copy; {{ current_year }}, <NuxtLink :to="localePath('/')" style="color:black">Anime Game Translations Team</NuxtLink></div>
            <div>{{ $t('web-template') }} &copy; {{ current_year }}, <NuxtLink :to="localePath('https://haroohie.club/')" style="color:black">Haroohie Translation Club</NuxtLink></div>
            <div>{{ $t('original-copyright') }}</div>
        </div>
    </footer>
</template>

<style>
footer {
    display: flex;
    flex-direction: column;
    color: var(--main-dark-gray);
    padding: 0.4rem 0;
    padding-top: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    text-align: center;
    justify-self: flex-end;
    margin: auto;
    background-color: #00000000;
    backdrop-filter: blur(0.8rem);
    max-width: 95vw;
}
</style>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()

const current_year = new Date().getFullYear()
</script>