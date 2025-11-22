"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";

export function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <section className="py-20 md:py-32 bg-muted/30 w-full">
            <div className="container px-4 md:px-6 w-full max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            Check out some of my recent work.
                        </p>
                    </motion.div>
                </div>

                {projects.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug.current}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No featured projects found.</p>
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center mt-16"
                >
                    <Button asChild variant="secondary" size="lg" className="h-12 px-8">
                        <Link href="/projects">View All Projects</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
