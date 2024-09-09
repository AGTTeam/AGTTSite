<!-- A basic page template with no default content margins -->
<template>
    <div class="page">
        <div class="content">
            <Navbar />
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style scoped>
/* Content display */
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100lvh;
    background-attachment: fixed;
    background-image: url('/images/background.png');
    background-size: cover;
}

.page .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    width: 90vw;
}
</style>