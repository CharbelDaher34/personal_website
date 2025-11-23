"use client";

import Image from "next/image";
import Link from "next/link";
import { Certification } from "@/types/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function CertificationsList({ certifications }: { certifications: Certification[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full border-white/5 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group overflow-hidden flex flex-col">
                        {cert.certificate_photo && (
                            <div className="relative w-full h-48 overflow-hidden shrink-0">
                                <Image
                                    src={cert.certificate_photo}
                                    alt={cert.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                            </div>
                        )}
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2 pt-4">
                            {cert.logo && (
                                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/5 p-1 shrink-0 border border-white/10">
                                    <Image src={cert.logo} alt={cert.name} fill className="object-contain" />
                                </div>
                            )}
                            <div className="flex-1">
                                <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    {cert.name}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            {cert.url && (
                                <Link
                                    href={cert.url}
                                    target="_blank"
                                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                                </Link>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
