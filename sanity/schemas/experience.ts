export default {
    name: 'experience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'job_title',
            title: 'Job Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'start_date',
            title: 'Start Date',
            type: 'string',
            description: 'e.g., "2022-01" or "Jan 2022"',
        },
        {
            name: 'end_date',
            title: 'End Date',
            type: 'string',
            description: 'Leave empty or null for current position',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Job description (supports Markdown)',
        },
        {
            name: 'achievements',
            title: 'Key Achievements',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'logo',
            title: 'Company Logo URL',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'job_title',
            subtitle: 'company',
        },
    },
}
