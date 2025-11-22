"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            Featured Projects
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                            A selection of my recent work in AI and web development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button asChild variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/10">
                            <Link href="/projects">
                                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
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
                    <div className="text-center py-12 border border-dashed border-white/10 rounded-xl bg-white/5">
                        <p className="text-muted-foreground">No featured projects found.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
