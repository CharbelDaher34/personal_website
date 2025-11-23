import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";


export default function AboutPage() {
    const about = portfolioData.personalInfo;

    return (
        <div className="container py-12 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 items-start">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src={about.profile_photo || '/placeholder.jpg'}
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                    <MarkdownRenderer content={about.bio} />
                    {about.cv_url && (
                        <div className="flex gap-4">
                            <Button asChild>
                                <a href={about.cv_url} download="Charbel_Daher_CV.pdf">
                                    <Download className="mr-2 h-4 w-4" /> Download CV
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
