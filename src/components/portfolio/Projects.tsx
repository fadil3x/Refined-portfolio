import React from "react";
import design1 from "@/assets/projects/Img2.png";
import design2 from "@/assets/projects/Img3.png";
import xiffNaScreenshot from "@/assets/projects/xiff-na-screenshot.png.asset.json";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-12 lg:py-16 px-[5%] md:px-[8%] bg-background text-foreground">
      <h2 className="text-3xl lg:text-4xl mb-8 text-primary text-center font-bold">{t.projects.title}</h2>

      {/* Hepatocatcher */}
      <motion.div
        className="mb-10 p-6 bg-card rounded-2xl border border-primary/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl lg:text-2xl mb-4 text-secondary font-semibold">
          {t.projects.hepatocatcher.title}
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          <div className="w-full max-w-[320px] aspect-video bg-muted rounded-xl shadow-md flex items-center justify-center text-muted-foreground border border-primary/10">
            <p className="text-center p-4 text-sm">
              {t.projects.hepatocatcher.demoText}{" "}
              <a
                href="https://github.com/fadil3x/Hepatocatcher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="flex-1 min-w-[280px]">
            <p className="mb-4 leading-relaxed text-foreground/90 text-sm lg:text-base">
              {t.projects.hepatocatcher.description}
            </p>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold no-underline hover:underline text-sm lg:text-base"
              href="https://github.com/fadil3x/Hepatocatcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.hepatocatcher.viewCode} →
            </a>
          </div>
        </div>
      </motion.div>

      {/* Xiff-Na */}
      <motion.div
        className="mb-10 p-6 bg-card rounded-2xl border border-primary/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl lg:text-2xl mb-4 text-secondary font-semibold">
          {t.projects.xiffNa.title}
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          <img
            src={xiffNaScreenshot.url}
            alt="Xiff-Na fast-food directory screenshot"
            className="w-full max-w-[320px] h-auto rounded-xl object-cover shadow-md border border-primary/10 hover:scale-105 transition-transform"
          />
          <div className="flex-1 min-w-[280px]">
            <p className="mb-4 leading-relaxed text-foreground/90 text-sm lg:text-base">
              {t.projects.xiffNa.description}
            </p>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold no-underline hover:underline text-sm lg:text-base"
              href="https://xiff-na.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.xiffNa.viewProject} →
            </a>
          </div>
        </div>
      </motion.div>

      {/* Graphic Design */}
      <motion.div
        className="p-6 bg-card rounded-2xl border border-primary/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl lg:text-2xl mb-4 text-secondary font-semibold">
          {t.projects.graphicDesign.title}
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          <div className="flex-1 min-w-[280px]">
            <p className="mb-4 leading-relaxed text-foreground/90 text-sm lg:text-base">
              {t.projects.graphicDesign.description}
            </p>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold no-underline hover:underline text-sm lg:text-base"
              href="https://icedrive.net/s/kVSxTgviuS1X8xQizNYYRT2zQNRy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.graphicDesign.viewPortfolio} →
            </a>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <img
              src={design1}
              alt="Design sample 1"
              className="w-[140px] lg:w-[160px] h-auto rounded-lg object-cover shadow-md border border-primary/10 hover:scale-105 transition-transform"
            />
            <img
              src={design2}
              alt="Design sample 2"
              className="w-[140px] lg:w-[160px] h-auto rounded-lg object-cover shadow-md border border-primary/10 hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
