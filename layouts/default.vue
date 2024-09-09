<!-- A basic page template with no default content margins -->
<template>
    <div class="page">
        <div class="bg"></div>
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
    min-height: 100vh;
    position: absolute;
}

.page .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    width: 90vw;
}

.bg {
  background: url('/images/background.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1; /* Make sure the background stays behind other content */
}
</style>