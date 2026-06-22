import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="bg-background w-full min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
