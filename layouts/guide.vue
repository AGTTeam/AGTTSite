<template>
    <div id="content-body">
        <div id="top-navbar">
            <Navbar :showHome=true />
		</div>	
        <div id="guide-body">
            <div class="content">
                <div id="guide-content">
                    <slot />
                </div>
            </div>
            <div class="sidebar">
                <slot name="sidebar" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(180, 213, 191, 1) 0%, rgba(255, 255, 255, 0.01) 9em);
    justify-content: center;
    align-items: center;
}

#guide-body {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    justify-content: space-between;
}

#guide-body .content {
    width: 70%;
    padding: 0.5rem;
}

#guide-body .sidebar {
    width: 20%;
    padding: 0.5rem;
}

#top-navbar {
    width: 90vw;
}

@media screen and (max-width: 750px) {
    #guide-body {
        flex-direction: column;
    }

    #guide-body .content {
        max-width: 100%;
        width: 85vw;
    }

    #guide-body .sidebar {
        max-width: 100%;
        width: 85vw;
    }
}

</style>