"use client";

import Image from "next/image";
import { ExperienceJob } from "@/types/portfolio";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ExperienceList({ experience }: { experience: ExperienceJob[] }) {
    return (
        <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10">
                            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        </div>

                        {/* Content Card */}
                        <div className="ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)]">
                            <Card className="border-white/5 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                                                {job.job_title}
                                            </CardTitle>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-base font-medium text-foreground/80">{job.company}</span>
                                                <span className="text-xs text-muted-foreground">• {job.location}</span>
                                            </div>
                                        </div>
                                        {job.logo && (
                                            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 p-1 shrink-0">
                                                <Image src={job.logo} alt={job.company} fill className="object-contain" />
                                            </div>
                                        )}
                                    </div>
                                    <Badge variant="secondary" className="w-fit mt-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                                        {job.start_date} - {job.end_date || "Present"}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                                    <MarkdownRenderer content={job.description} />
                                    {job.achievements && job.achievements.length > 0 && (
                                        <ul className="mt-4 space-y-2">
                                            {job.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Empty space for the other side */}
                        <div className="hidden md:block w-[calc(50%-2rem)]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
