<template>
    <footer>
        <div id="copyright">
            <div>{{ $t('website') }} &copy; {{ current_year }}, <NuxtLink :to="localePath('/')" style="color:black">Anime Game Translations Team</NuxtLink></div>
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
    padding-top: 1.2rem;
    text-align: center;
    justify-self: flex-end;
    margin-top: auto;
    background-color: #00000000;
    backdrop-filter: blur(0.8rem);
    filter: drop-shadow(0 0 0.5rem #00000055);
    width: 575px;
}
</style>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()

const current_year = new Date().getFullYear()
</script>