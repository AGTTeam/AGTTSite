<template>
    <div id="content-body">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>

<style scoped>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(180, 213, 191, 1) 0%, rgba(255, 255, 255, 0.01) 20em);
}
</style>