export interface Project {
    title: string;
    slug: { current: string };
    short_summary: string;
    featured: boolean;
    images?: string[];
    tech_stack: string[];
    description?: string;
    project_url?: string;
    video_url?: string;
}

export interface ExperienceJob {
    job_title: string;
    company: string;
    location: string;
    start_date: string;
    end_date?: string;
    description: string;
    achievements?: string[];
    logo?: string;
}

export interface Education {
    school: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
}

export interface Certification {
    name: string;
    logo?: string;
    certificate_photo?: string;
    url?: string;
}

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    role: string;
    bio: string;
    location: string;
    profile_photo?: string;
    cv_url?: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: ExperienceJob[];
    projects: Project[];
    certifications: Certification[];
}
