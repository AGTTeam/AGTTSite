<template>
    <div>
        <NuxtLayout>
            <div id="home-page">
                <div class="top">
                </div>
                <div class="newsfeed">
                    <div class="leftside">
                        <div class="releases box">
                            <TranslationsGrid />
                        </div>
                        <div class="socials box">
                            <h2>{{ $t('about') }}</h2>
                            <ContentDoc :path="`/${locale}`" />
                            <h2>{{ $t('social-links') }}</h2>
                            <SocialLinks type="stack" :stack-topper="{link:'https://agtteam.net/blog', locale: 'news-and-blog', icon: 'fa6-solid:paper-plane'}" />
                        </div>
                    </div>
                    <div class="blogs box">
                        <BlogPreviewStack :limit="1" :sticky="true" />
                        <h2>{{ $t('blog') }}</h2>
                        <BlogPreviewStack :limit="9" />
                        <ButtonRow class="view-more">
                            <ButtonLink :link="localePath('/blog')" rgbcolor="#3ba379" icon="fa6-solid:paper-plane">{{ $t('view-all') }}</ButtonLink>
                            <ButtonLink :link="`${locale == 'en' ? '/' : `/${locale}/`}rss.xml`" color="rss" icon="fa6-solid:rss">{{ $t('feed') }}</ButtonLink>
                        </ButtonRow>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()

definePageMeta({
    title: computed(() => t('index-title')),
    description: computed(() => t('index-description')),
    layout: 'default'
})
</script>

<style scoped>
#home-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*margin: 0 auto;*/
}

#home-page .box {
    margin: 0.5rem;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: var(--main-shadow);
}

#home-page .top {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    width: 100%;
}

#home-page .newsfeed {
    display: flex;
    flex-direction: row;
    width: 100%;
}

#home-page .releases {
    display: flex;
    flex-direction: column;
    height: fit-content;
}

#home-page .socials {
    height: fit-content;
    max-width: 300px;
}

#home-page .blogs {
    display: flex;
    flex-direction: column;
}

#home-page .blogs .view-more {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
}

h2 {
    margin: 0;
    margin-bottom: 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
}

/* Less than 850px */
@media screen and (max-width: 940px) {
    #home-page .newsfeed {
        flex-direction: column;
    }

    .socials {
        max-width: unset !important;
    }
}
</style>