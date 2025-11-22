import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g7vofr5b';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = process.env.SANITY_API_TOKEN;

// Validate required environment variables
if (!projectId) {
    console.warn('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
}

if (!dataset) {
    console.warn('Missing NEXT_PUBLIC_SANITY_DATASET environment variable');
}

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
    token,
    perspective: 'published',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    // If source is a string (mock url), return it directly
    if (typeof source === 'string') return { url: () => source };
    // If source is null/undefined, return a placeholder or empty object
    if (!source) return { url: () => '/placeholder.svg' };

    try {
        return builder.image(source);
    } catch (error) {
        console.warn('Error generating image URL:', error);
        return { url: () => '/placeholder.svg' };
    }
}
