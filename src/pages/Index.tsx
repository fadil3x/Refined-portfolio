import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="bg-background w-full min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
