export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'university',
            title: 'University/School',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'start_date',
            title: 'Start Date',
            type: 'string',
            description: 'e.g., "2015-09" or "Sep 2015"',
        },
        {
            name: 'end_date',
            title: 'End Date',
            type: 'string',
            description: 'e.g., "2019-05" or "May 2019"',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Education details (supports Markdown)',
        },
        {
            name: 'logo',
            title: 'University Logo URL',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'degree',
            subtitle: 'university',
        },
    },
}
