import { client } from "@/lib/sanityClient";
import { projectsQuery } from "@/lib/queries";
import { ProjectCard } from "@/components/ProjectCard";

export default async function ProjectsPage() {
    let projects: any[] = [];

    try {
        projects = await client.fetch(projectsQuery);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
                <p className="text-muted-foreground max-w-2xl">
                    A collection of projects I've worked on, ranging from web applications to open source tools.
                </p>
            </div>

            {projects && projects.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project: any) => (
                        <ProjectCard key={project.slug.current} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects found. Add some in Sanity Studio!</p>
                </div>
            )}
        </div>
    );
}
