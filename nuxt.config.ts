import { readFileSync } from 'node:fs'

// Nuxt config file (https://nuxt.com/docs/getting-started/configuration)
export default {
    // Modules
    modules: [
        '@nuxt/icon',
        '@nuxt/content',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n'
    ],

    // Fonts
    googleFonts: {
        download: true,
        inject: true,
        families: {
            'Nunito': [400, 700],
            'Notica Text': [700],
        }
    },

    // Pre render the sitemap, 404, and RSS feeds
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/404.html', '/rss.xml']
        }
    },

    // App config
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Anime Game Translations Team'
        }
    },

    i18n: {
        detectBrowserLanguage: {
            useCookie: false,
            redirectOn: 'root',
        },
        locales: [
            { code: 'en', iso: 'en', file: 'locales/en.json', dir: 'ltr' },
        ],
        defaultLocale: 'en'
    },

    public: {
        mdc: {
            useNuxtImage: false,
        },
    },

    compatibilityDate: '2024-08-03',
}