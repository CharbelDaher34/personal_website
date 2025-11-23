import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const services = portfolioData.services || [];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <ServicesSection services={services} />
      <FeaturedProjectsSection projects={featuredProjects} />
    </div>
  );
}
