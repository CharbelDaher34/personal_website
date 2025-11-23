import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="group relative flex h-full flex-col overflow-hidden border-white/5 bg-black/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30">
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                <Image
                    src={project.images?.[0] || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button asChild size="icon" className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all">
                        <Link href={`/projects/${project.slug.current}`}>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>

            <CardHeader className="relative space-y-2 p-6 pb-2">
                <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl font-bold leading-tight text-white transition-colors group-hover:text-primary">
                        {project.title}
                    </CardTitle>
                    {project.featured && (
                        <span className="inline-flex shrink-0 items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-500 backdrop-blur-sm">
                            Featured
                        </span>
                    )}
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col p-6 pt-2">
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground/90">
                    {project.short_summary}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech_stack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech_stack.length > 4 && (
                        <span className="inline-flex items-center rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                            +{project.tech_stack.length - 4}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
