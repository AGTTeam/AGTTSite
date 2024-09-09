<template>
    <div id="content-body">
        <div id="top-navbar">
            <Navbar :showHome=true />
        </div>
        <slot />
        <Footer />
    </div>
</template>

<style scoped>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(180, 213, 191, 1) 0%, rgba(255, 255, 255, 0.01) 9em);
}
#top-navbar {
    width: 90vw;
}
</style>