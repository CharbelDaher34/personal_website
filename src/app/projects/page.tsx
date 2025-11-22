import portfolioData from "@/data/portfolio.json";
import { ProjectsList } from "@/components/ProjectsList";

export default function ProjectsPage() {
    const projects = portfolioData.projects;

    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
                <p className="text-muted-foreground max-w-2xl">
                    A collection of projects I've worked on, ranging from web applications to open source tools.
                </p>
            </div>

            {projects && projects.length > 0 ? (
                <ProjectsList projects={projects} />
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects found.</p>
                </div>
            )}
        </div>
    );
}
