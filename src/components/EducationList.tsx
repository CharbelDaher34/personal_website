"use client";

import Image from "next/image";
import { Education } from "@/types/portfolio";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function EducationList({ education }: { education: Education[] }) {
    return (
        <div className="max-w-3xl mx-auto grid gap-8">
            {education.map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="flex flex-col md:flex-row gap-6 p-6 items-start hover:shadow-md transition-shadow">
                        <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg border bg-muted flex items-center justify-center">
                            <div className="text-2xl font-bold text-muted-foreground">
                                {edu.school[0]}
                            </div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                <div>
                                    <CardTitle className="text-xl">{edu.school}</CardTitle>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                </div>
                                <Badge variant="secondary">
                                    {edu.startDate} - {edu.endDate}
                                </Badge>
                            </div>
                            <p className="text-muted-foreground">{edu.location}</p>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
