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
                    className="h-full"
                >
                    <Card className="group relative h-full overflow-hidden border-white/5 bg-black/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30">
                        {/* Gradient Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Certificate Image Area */}
                        <div className="relative h-48 w-full overflow-hidden bg-black/40">
                            {cert.certificate_photo ? (
                                <>
                                    {/* Blur Background */}
                                    <div className="absolute inset-0 opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-50">
                                        <Image
                                            src={cert.certificate_photo}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Main Image */}
                                    <Image
                                        src={cert.certificate_photo}
                                        alt={cert.name}
                                        fill
                                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                    />
                                </>
                            ) : (
                                <div className="flex h-full items-center justify-center bg-white/5">
                                    <span className="text-muted-foreground">No Preview</span>
                                </div>
                            )}

                            {/* Overlay Action */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                {cert.url && (
                                    <Link
                                        href={cert.url}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
                                    >
                                        Verify Credential <ExternalLink className="h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <CardHeader className="relative space-y-4 p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-1">
                                    <CardTitle className="text-lg font-bold leading-tight text-white transition-colors group-hover:text-primary">
                                        {cert.name}
                                    </CardTitle>
                                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        Certification
                                    </p>
                                </div>
                                {cert.logo && (
                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 p-1.5 shadow-inner">
                                        <Image
                                            src={cert.logo}
                                            alt="Issuer Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
