"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Atmospheric Background */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-blue-500/5 blur-[100px]" />
            
            <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
                <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
                            Featured Projects
                        </h2>
                        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                            A selection of my recent work in AI and web development, showcasing innovation and technical depth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button asChild variant="outline" className="group border-primary/20 bg-primary/5 text-primary hover:border-primary/40 hover:bg-primary/10">
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
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 py-24 text-center">
                        <p className="text-lg text-muted-foreground">No featured projects found.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
