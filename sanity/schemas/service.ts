export default {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'Short catchy tagline',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Service details (supports Markdown)',
        },
        {
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g., "Code", "PenTool", "MessageSquare")',
            initialValue: 'Code',
        },
        {
            name: 'price_range',
            title: 'Price Range',
            type: 'string',
            description: 'e.g., "$1000 - $5000" or "$100/hr"',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
        },
    },
}
