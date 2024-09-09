<!-- A basic page template with no default content margins -->
<template>
    <div class="page">
        <div class="content">
            <Navbar />
		<div class="body-bg">
		</div>	
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
}

.page .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    width: 90vw;
}

body {
  margin: 0;
  padding: 0;
}

.body-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.png');
  background-size: cover;
  z-index: -1; /* Make sure the background stays behind other content */
}
</style>