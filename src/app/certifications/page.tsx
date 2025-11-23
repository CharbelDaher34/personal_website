import portfolioData from "@/data/portfolio.json";
import { CertificationsList } from "@/components/CertificationsList";

export default function CertificationsPage() {
    const certifications = portfolioData.certifications;

    if (!certifications || certifications.length === 0) {
        return (
            <div className="container py-12 md:py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Certifications</h1>
                <p className="text-muted-foreground">No certifications found.</p>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-24">
            <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Certifications</h1>
            <CertificationsList certifications={certifications} />
        </div>
    );
}
