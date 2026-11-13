import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Resume = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="resume"
      className="py-12 lg:py-16 px-[5%] md:px-[8%] bg-background text-foreground border-t border-primary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[760px] mx-auto p-6 lg:p-8 bg-card rounded-2xl border border-primary/15 shadow-lg flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-[240px]">
          <h2 className="text-2xl lg:text-3xl mb-2 text-primary font-bold">
            {t.resume.title}
          </h2>
          <p className="text-sm lg:text-base leading-relaxed text-foreground/90">
            {t.resume.description}
          </p>
          <p className="mt-3 text-xs lg:text-sm text-foreground/55">
            {t.resume.meta}
          </p>
        </div>
        <motion.a
          href="/downloads/Falilou-Niang-Resume-2026.pdf"
          download="Falilou-Niang-Resume-2026.pdf"
          className="shrink-0 inline-flex items-center gap-2 py-3 px-6 bg-secondary text-secondary-foreground font-bold no-underline rounded-lg transition-all duration-300 hover:bg-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v12" />
            <path d="M7 11l5 5 5-5" />
            <path d="M4 21h16" />
          </svg>
          {t.resume.downloadBtn}
        </motion.a>
      </div>
    </motion.section>
  );
};
