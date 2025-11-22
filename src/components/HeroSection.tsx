"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background w-full flex items-center justify-center">
            <div className="container px-4 md:px-6 relative z-10 w-full max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
                    >
                        Available for hire
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Building Digital Experiences
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-[800px] text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed"
                    >
                        I'm Charbel Daher, an AI Engineer. I build accessible, pixel-perfect, performant, and web experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row"
                    >
                        <Button asChild size="lg" className="h-12 px-8 text-lg">
                            <Link href="/contact">
                                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg">
                            <Link href="/projects">
                                View Projects
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"
            />
        </section>
    );
}
