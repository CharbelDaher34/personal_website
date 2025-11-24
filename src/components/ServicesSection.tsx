"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Terminal, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Map icon strings to components
const iconMap = {
    Users: Users,
    Brain: Brain,
    Terminal: Terminal,
    Globe: Globe,
};

interface Service {
    title: string;
    description: string;
    icon: string;
}

export function ServicesSection({ services }: { services: Service[] }) {
    return (
        <section className="relative overflow-hidden py-24 md:py-32 bg-black/20">
            {/* Background Elements */}
            <div className="absolute right-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

            <div className="container relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
                <div className="mb-16 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
                            Services & Expertise
                        </h2>
                        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                            Leveraging cutting-edge AI and engineering skills to deliver impactful solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-5xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="group relative h-full overflow-hidden border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/10 hover:shadow-xl hover:shadow-primary/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <CardHeader>
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-white transition-colors group-hover:text-primary">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground/90 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/contact">
                            Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
