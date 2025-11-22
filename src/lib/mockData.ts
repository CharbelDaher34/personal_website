export const mockAbout = {
    title: "Hi, I'm Alex Doe",
    bio: `I am a **Full Stack Developer** passionate about building beautiful web applications. 
  
  My mission is to create software that solves real-world problems while providing an exceptional user experience. I specialize in React, Next.js, and Node.js.`,
    profile_photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    cv_url: "#"
};

export const mockExperience = [
    {
        job_title: "Senior Frontend Engineer",
        company: "Tech Corp",
        start_date: "2022-01-01",
        end_date: null, // Present
        description: "Leading the frontend team in building a scalable SaaS platform using **Next.js** and **TypeScript**.",
        achievements: [
            "Improved site performance by 40%",
            "Mentored 3 junior developers",
            "Implemented a new design system"
        ],
        logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&auto=format&fit=crop&q=60"
    },
    {
        job_title: "Web Developer",
        company: "Creative Agency",
        start_date: "2019-06-01",
        end_date: "2021-12-31",
        description: "Developed custom websites for various clients using **React** and **WordPress**.",
        achievements: [
            "Delivered 15+ projects on time",
            "Optimized SEO for client sites"
        ],
        logo: "https://images.unsplash.com/photo-1572044162444-ad6021194362?w=200&auto=format&fit=crop&q=60"
    }
];

export const mockEducation = [
    {
        degree: "B.S. Computer Science",
        university: "State University",
        start_date: "2015-09-01",
        end_date: "2019-05-01",
        description: "Focus on Software Engineering and Algorithms.",
        logo: "https://images.unsplash.com/photo-1592280771884-13a6cb56b695?w=200&auto=format&fit=crop&q=60"
    }
];

export const mockProjects = [
    {
        title: "E-Commerce Platform",
        slug: { current: "e-commerce-platform" },
        short_summary: "A full-featured online store built with Next.js and Stripe.",
        description: `
# E-Commerce Platform

This project is a comprehensive e-commerce solution designed for scalability and performance.

## Features
- **User Authentication**: Secure login and signup.
- **Product Catalog**: Dynamic product listing with filtering.
- **Cart & Checkout**: Seamless integration with Stripe.
- **Admin Dashboard**: Manage products and orders.

## Tech Stack
- Next.js
- Tailwind CSS
- PostgreSQL
- Stripe API
    `,
        project_url: "https://github.com",
        tech_stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&auto=format&fit=crop&q=60"
        ],
        video_url: "",
        featured: true
    },
    {
        title: "Task Management App",
        slug: { current: "task-management-app" },
        short_summary: "A productivity tool for teams to collaborate on tasks.",
        description: "A real-time task management application...",
        project_url: "https://github.com",
        tech_stack: ["React", "Firebase", "Redux"],
        images: [
            "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop&q=60"
        ],
        featured: true
    },
    {
        title: "Portfolio Website",
        slug: { current: "portfolio-website" },
        short_summary: "My personal portfolio website.",
        description: "The website you are looking at right now!",
        project_url: "https://github.com",
        tech_stack: ["Next.js", "Tailwind CSS", "Sanity"],
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
        ],
        featured: false
    }
];

export const mockServices = [
    {
        title: "Web Development",
        tagline: "Modern, fast, and responsive websites.",
        description: "I build websites that look great and work perfectly on all devices.",
        icon: "Code", // We'll map this string to a Lucide icon
        price_range: "$1000 - $5000"
    },
    {
        title: "UI/UX Design",
        tagline: "User-centered design solutions.",
        description: "Creating intuitive and engaging user interfaces.",
        icon: "PenTool",
        price_range: "$500 - $3000"
    },
    {
        title: "Consulting",
        tagline: "Expert advice on your tech stack.",
        description: "Helping you make the right technical decisions for your business.",
        icon: "MessageSquare",
        price_range: "$100/hr"
    }
];
