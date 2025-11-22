import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { educationQuery } from "@/lib/queries";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function EducationPage() {
    let education: any[] = [];

    try {
        education = await client.fetch(educationQuery);
    } catch (error) {
        console.error('Error fetching education:', error);
    }

    if (!education || education.length === 0) {
        return (
            <div className="container py-12 md:py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Education</h1>
                <p className="text-muted-foreground">No education entries found. Add some in Sanity Studio!</p>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Education</h1>
            <div className="max-w-3xl mx-auto grid gap-8">
                {education.map((edu: any, index: number) => (
                    <Card key={index} className="flex flex-col md:flex-row gap-6 p-6 items-start">
                        <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg border bg-muted">
                            {edu.logo ? (
                                <Image src={edu.logo} alt={edu.university} fill className="object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-2xl font-bold text-muted-foreground">
                                    {edu.university[0]}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                <div>
                                    <CardTitle className="text-xl">{edu.university}</CardTitle>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                </div>
                                <Badge variant="secondary">
                                    {edu.start_date} - {edu.end_date}
                                </Badge>
                            </div>
                            <div className="text-muted-foreground">
                                <MarkdownRenderer content={edu.description} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
