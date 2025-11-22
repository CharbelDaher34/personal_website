import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { client } from "@/lib/sanityClient";
import { aboutQuery } from "@/lib/queries";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

export default async function AboutPage() {
    let about = null;

    try {
        about = await client.fetch(aboutQuery);
    } catch (error) {
        console.error('Error fetching about data:', error);
    }

    if (!about) {
        return (
            <div className="container py-12 md:py-24">
                <p className="text-center text-muted-foreground">
                    About content not found. Please add an "about" document in Sanity Studio.
                </p>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 items-start">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src={about.profile_photo}
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold tracking-tight">{about.title}</h1>
                    <MarkdownRenderer content={about.bio} />
                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href={about.cv_url} target="_blank">
                                <Download className="mr-2 h-4 w-4" /> Download CV
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
