import portfolioData from "@/data/portfolio.json";
import { EducationList } from "@/components/EducationList";

export default function EducationPage() {
    const education = portfolioData.education;

    if (!education || education.length === 0) {
        return (
            <div className="container py-12 md:py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Education</h1>
                <p className="text-muted-foreground">No education entries found.</p>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Education</h1>
            <EducationList education={education} />
        </div>
    );
}
