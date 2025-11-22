import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="group relative overflow-hidden border-white/5 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full">
            <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                    src={project.images?.[0] || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Button asChild size="icon" variant="secondary" className="rounded-full h-10 w-10 shadow-lg">
                        <Link href={`/projects/${project.slug.current}`}>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
            
            <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 relative z-10">
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.short_summary}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech_stack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary/80 transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech_stack.length > 3 && (
                        <span className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                            +{project.tech_stack.length - 3}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
