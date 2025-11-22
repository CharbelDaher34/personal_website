# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## ✨ Features

- **Modern Design**: Beautiful, responsive design with vibrant colors and smooth animations
- **CMS-Powered**: Easy content management with Sanity CMS (currently uses mock data)
- **Fully Responsive**: Works perfectly on all devices
- **Dark Mode Ready**: Includes dark mode support
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type Safe**: Built with TypeScript for reliability

## 📄 Pages

- **Home**: Landing page with featured projects
- **About**: Personal introduction and bio
- **Experience**: Work experience timeline
- **Education**: Educational background
- **Projects**: Portfolio of projects with detailed pages
- **Services**: Services offered with pricing
- **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd persoanl
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **CMS**: [Sanity](https://www.sanity.io/) (optional)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Carousel**: [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)

## 📁 Project Structure

```
/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── projects/
│   │   │   └── [slug]/        # Dynamic project pages
│   │   ├── services/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Home page
│   │   └── globals.css
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── MarkdownRenderer.tsx
│   └── lib/                   # Utilities
│       ├── mockData.ts        # Mock data for development
│       ├── queries.ts         # Sanity queries
│       ├── sanityClient.ts    # Sanity client setup
│       └── utils.ts
├── public/                    # Static assets
└── package.json
```

## 🎨 Customization

### Using Mock Data (Current Setup)

The site currently uses mock data from `src/lib/mockData.ts`. You can edit this file to customize:
- About section content
- Work experience
- Education
- Projects
- Services

### Connecting to Sanity CMS

To use real CMS data:

1. Create a Sanity project at [sanity.io](https://www.sanity.io/)
2. Set up your Sanity schema based on the data models in the requirements
3. Update `.env.local` with your Sanity credentials
4. Replace mock data imports with actual Sanity queries

### Styling

- **Colors**: Edit `src/app/globals.css` to change the color scheme
- **Components**: Modify components in `src/components/`
- **Layout**: Update `src/app/layout.tsx` for global layout changes

## 📝 Content Management

### Data Models

Each section uses the following data structure:

**About**
- title, bio (markdown), profile_photo, cv_url

**Experience**
- job_title, company, start_date, end_date, description (markdown), achievements, logo

**Education**
- degree, university, start_date, end_date, description (markdown), logo

**Projects**
- title, slug, short_summary, description (markdown), project_url, tech_stack, images, video_url, featured

**Services**
- title, tagline, description (markdown), icon, price_range

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

The site can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Alex Doe**
- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS
