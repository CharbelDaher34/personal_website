import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
    </div>
  );
}
