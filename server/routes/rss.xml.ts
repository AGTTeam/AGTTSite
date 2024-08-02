import { serverQueryContent } from '#content/server';
import RSS from 'rss'
import ufs from 'url-file-size'

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'Anime Game Translations Team Blog',
        language: 'en',
        site_url: 'https://agtteam.net/',
        feed_url: 'https://agtteam.net/rss.xml',
        image_url: 'https://agtteam.net/images/agtt-logo.png',
    })

    const locale = 'en'
    const docs = await serverQueryContent(event).find();
    const blogPosts = docs.filter((doc) => doc._path?.includes('/blog/')).filter(b => b.navigation).filter(b => b.locale == locale)
        .sort().reverse();

    for (const doc of blogPosts) {
        feed.item({
            title: doc.title ?? '-',
            url: `https://agtteam.net${doc._path?.substring(0, doc._path?.lastIndexOf('/'))}`,
            date: `${doc.navigation.year}-${doc.navigation.month}-${doc.navigation.day}`,
            description: doc.description,
            enclosure: {
                url: `https://agtteam.net/images/blog/${doc.navigation.image}`,
                type: 'image/png',
                size: await ufs(`https://agtteam.net/images/blog/${doc.navigation.image}`)
            }
        })
    }

    const feedString = feed.xml({ indent: true });
    event.res.setHeader('content-type', 'text/xml');
    event.res.end(feedString);
})