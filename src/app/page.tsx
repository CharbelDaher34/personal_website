import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { client } from "@/lib/sanityClient";
import { projectsQuery } from "@/lib/queries";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  title: string;
  slug: { current: string };
  short_summary: string;
  featured: boolean;
  images?: string[];
  tech_stack: string[];
}

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  let allProjects: Project[] = [];
  
  try {
    allProjects = await client.fetch(projectsQuery);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }

  const featuredProjects = allProjects?.filter((p: Project) => p.featured) || [];

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background w-full flex items-center justify-center">
        <div className="container px-4 md:px-6 relative z-10 w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-medium animate-fade-in">
              Available for hire
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-fade-in [animation-delay:200ms]">
              Building Digital Experiences
            </h1>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in [animation-delay:400ms]">
              I'm Alex Doe, a Full Stack Developer. I build accessible, pixel-perfect, performant, and web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row animate-fade-in [animation-delay:600ms]">
              <Button asChild size="lg" className="h-12 px-8 text-lg">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg">
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 bg-muted/30 w-full">
        <div className="container px-4 md:px-6 w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Check out some of my recent work.
              </p>
            </div>
          </div>
          
          {featuredProjects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project: Project) => (
                <ProjectCard key={project.slug.current} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No featured projects found. Add some in Sanity Studio!</p>
            </div>
          )}
          
          <div className="flex justify-center mt-16">
            <Button asChild variant="secondary" size="lg" className="h-12 px-8">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
