"use client";

import { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export function ProjectsList({ projects }: { projects: Project[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    );
}
