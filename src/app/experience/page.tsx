import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { experienceQuery } from "@/lib/queries";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceJob {
    job_title: string;
    company: string;
    start_date: string;
    end_date?: string;
    description: string;
    achievements?: string[];
    logo?: string;
}

export default async function ExperiencePage() {
    const experience: ExperienceJob[] = await client.fetch(experienceQuery);

    return (
        <div className="container py-12 md:py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Work Experience</h1>
            <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                {experience.map((job: ExperienceJob, index: number) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Icon/Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            {job.logo ? (
                                <div className="relative w-6 h-6 overflow-hidden rounded-full">
                                    <Image src={job.logo} alt={job.company} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-3 h-3 bg-primary rounded-full" />
                            )}
                        </div>

                        {/* Card */}
                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                            <CardHeader className="p-0 mb-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                                    <CardTitle className="text-lg font-bold">{job.job_title}</CardTitle>
                                    <Badge variant="outline" className="w-fit">
                                        {job.start_date} - {job.end_date || "Present"}
                                    </Badge>
                                </div>
                                <p className="text-primary font-medium">{job.company}</p>
                            </CardHeader>
                            <CardContent className="p-0 text-sm text-muted-foreground">
                                <MarkdownRenderer content={job.description} />
                                {job.achievements && job.achievements.length > 0 && (
                                    <ul className="mt-4 list-disc list-inside space-y-1">
                                        {job.achievements.map((achievement: string, i: number) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
