<template>
    <div class="error" v-if="error.statusCode == 404">
        <h2>Error {{ error.statusCode }} - Not Found</h2>
		<img src="/images/404.png"/>
        <p>This was not according to according to keikaku! Click below to return to a more familiar space!</p>
        <ButtonLink link="/" color="red" icon="fa6-solid:house">Back to Home</ButtonLink>
		<p><small>(Translator's note: Keikaku means plan)</small></p>
    </div>
    <div class="error" v-else-if="error.statusCode == 500">
        <h2>Error {{ error.statusCode }} - Internal Error</h2>
        <p>This error can be caused by the uBlock Origin filter "Fanboy's Annoyance." Please consider disabling this filter or disabling uBlock Origin on this site.</p>
        <p>If you don't have this filter enabled, try refreshing the page (possibly a few times). If that still doesn't work, please <a href="https://github.com/AGTTeam/AGTTSite/issues">report this issue to us</a>!</p>
    </div>
    <div class="error" v-else>
        <h2>Error {{ error.statusCode }}</h2>
        <p>Please <a href="https://github.com/AGTTeam/AGTTSite/issues">report this issue to us</a>!</p>
    </div>
</template>

<style scoped>
.error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    background: linear-gradient(180deg, rgba(180, 213, 191, 1) 0%, rgba(255, 255, 255, 0.01) 20em);
}

.error img {
    max-width: 450px;
    height: auto;
    border-radius: 0.5rem;
}

/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-attachment: fixed;
    /* background-image: url('/images/background.png'); */
    background-size: cover;
    justify-content: center;
}

#topbar {
    margin: 0 auto;
    padding: 0;
}

#topbar #logo {
    max-width: 500px;
    padding: 0.5rem;
}
</style>

<script setup>
definePageMeta({
    title: 'Error - Anime Game Translations Team',
    description: 'Welcome to the Anime Game Translations Team website!',
})

const props = defineProps({
  error: Object
})
</script>