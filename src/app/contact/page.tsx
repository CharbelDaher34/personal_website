"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Send } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function ContactPage() {
    const { email, location } = portfolioData.personalInfo;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="container py-12 md:py-24">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-lg">Email</CardTitle>
                                <CardDescription>{email}</CardDescription>
                            </CardHeader>
                        </Card>



                        <Card>
                            <CardHeader>
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-lg">Location</CardTitle>
                                <CardDescription>{location}</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and I'll get back to you within 24 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {submitStatus === "success" && (
                                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-100">
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 text-red-900 dark:text-red-100">
                                        ✗ Something went wrong. Please try again.
                                    </div>
                                )}

                                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>Sending...</>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
