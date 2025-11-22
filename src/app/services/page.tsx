import { client } from "@/lib/sanityClient";
import { servicesQuery } from "@/lib/queries";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function ServicesPage() {
    let services: any[] = [];

    try {
        services = await client.fetch(servicesQuery);
    } catch (error) {
        console.error('Error fetching services:', error);
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Services</h1>
                <p className="text-muted-foreground max-w-2xl mb-8">
                    I offer a range of services to help bring your ideas to life. From development to consulting,
                    I'm here to help you succeed.
                </p>
            </div>

            {services && services.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {services.map((service: any) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            tagline={service.tagline}
                            description={service.description}
                            icon={service.icon}
                            price_range={service.price_range}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No services found. Add some in Sanity Studio!</p>
                </div>
            )}

            <div className="flex justify-center">
                <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
        </div>
    );
}
