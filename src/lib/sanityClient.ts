import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mock_project_id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-01-01';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
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
