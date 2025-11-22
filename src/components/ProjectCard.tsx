import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // I need to add badge component or just use span
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Project {
    title: string;
    slug: { current: string };
    short_summary: string;
    images?: string[];
    tech_stack: string[];
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={project.images?.[0] || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.short_summary}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full group">
                    <Link href={`/projects/${project.slug.current}`}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
