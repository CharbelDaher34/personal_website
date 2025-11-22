import Link from "next/link";
import { notFound } from "next/navigation";
import portfolioData from "@/data/portfolio.json";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Project } from "@/types/portfolio";

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug.current,
    }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = (portfolioData.projects as Project[]).find((p) => p.slug.current === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-24 max-w-5xl">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>
            </Button>

            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
                    <p className="text-xl text-muted-foreground">{project.short_summary}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {project.project_url && (
                            <Button asChild>
                                <Link href={project.project_url} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Image Carousel */}
                {project.images && project.images.length > 0 && (
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <ImageCarousel images={project.images} title={project.title} />
                    </div>
                )}

                {/* Video */}
                {project.video_url && (
                    <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={project.video_url}
                            title={`${project.title} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                )}

                {/* Description */}
                {project.description && (
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <MarkdownRenderer content={project.description} />
                    </div>
                )}
            </div>
        </div>
    );
}
