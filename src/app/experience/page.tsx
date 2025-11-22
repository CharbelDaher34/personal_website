import portfolioData from "@/data/portfolio.json";
import { ExperienceList } from "@/components/ExperienceList";

export default function ExperiencePage() {
    const experience = portfolioData.experience;

    if (!experience || experience.length === 0) {
        return (
            <div className="container py-12 md:py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Work Experience</h1>
                <p className="text-muted-foreground">No experience entries found.</p>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Work Experience</h1>
            <ExperienceList experience={experience} />
        </div>
    );
}
