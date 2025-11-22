export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Your name or greeting (e.g., "Hi, I\'m John Doe")',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            description: 'Your bio/introduction (supports Markdown)',
        },
        {
            name: 'profile_photo',
            title: 'Profile Photo URL',
            type: 'url',
            description: 'Full URL to your profile photo',
        },
        {
            name: 'cv_url',
            title: 'CV Download URL',
            type: 'url',
            description: 'Link to your CV/Resume PDF',
        },
    ],
}
