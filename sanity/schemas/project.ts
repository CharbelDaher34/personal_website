export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'short_summary',
            title: 'Short Summary',
            type: 'string',
            description: 'Brief one-line description',
        },
        {
            name: 'description',
            title: 'Full Description',
            type: 'text',
            description: 'Detailed project description (supports Markdown)',
        },
        {
            name: 'project_url',
            title: 'Project URL',
            type: 'url',
            description: 'GitHub, live demo, or project link',
        },
        {
            name: 'tech_stack',
            title: 'Technologies Used',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g., ["Next.js", "TypeScript", "Tailwind"]',
        },
        {
            name: 'images',
            title: 'Project Images',
            type: 'array',
            of: [{ type: 'url' }],
            description: 'URLs of project screenshots/images',
        },
        {
            name: 'video_url',
            title: 'Video URL (Optional)',
            type: 'url',
            description: 'YouTube or video embed URL',
        },
        {
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            description: 'Show on homepage?',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'short_summary',
        },
    },
}
