import AboutUs from "@/components/home/AboutUs";
import HeroPage from "@/components/home/HeroPage";
import ProjectsSection from "@/components/home/Projects";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroPage />
      <AboutUs />
      <Services />
      <ProjectsSection />
    </div>
  );
}
