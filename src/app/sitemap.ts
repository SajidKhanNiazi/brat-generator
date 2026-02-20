import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brat-generator.work';
    const lastModified = new Date();

    const routes = [
        '',
        '/brat-lyric-generator',
        '/brat-meme-generator',
        '/brat-generator-different-colors',
        '/contact',
        '/privacy-policy',
        '/terms',
        '/cookies',
        '/disclaimer',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
