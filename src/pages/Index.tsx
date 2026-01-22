import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="bg-background w-full min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
