import React from "react";
import me from "@/assets/hero/me2.png";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      className="flex flex-row items-center justify-center gap-8 lg:gap-12 py-12 lg:py-16 px-[5%] md:px-[8%] bg-card text-foreground flex-wrap"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={me}
          alt="Image of Falilou"
          className="w-[280px] lg:w-[320px] h-auto rounded-2xl shadow-lg border-2 border-primary/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>
      <div className="flex-1 min-w-[300px] max-w-[550px] flex flex-col gap-4">
        <h1 className="text-3xl lg:text-4xl text-primary font-bold">{t.hero.greeting}</h1>
        <p className="text-base lg:text-lg text-justify-word leading-relaxed text-foreground/90">
          {t.hero.bio}
        </p>
        <div className="bg-primary/5 p-4 border-l-4 border-primary rounded-lg">
          <h3 className="mb-2 text-primary font-semibold text-lg">
            {t.hero.skillsTitle}
          </h3>
          <ul className="list-none p-0 m-0 space-y-1 text-sm lg:text-base">
            <li className="text-foreground/85">{t.hero.programmingLang}</li>
            <li className="text-foreground/85">{t.hero.spokenLang}</li>
            <li className="text-foreground/85">{t.hero.experience}</li>
          </ul>
        </div>
        <a
          href="mailto:mouhamadouniang17@gmail.com"
          className="self-start py-2.5 px-6 bg-secondary text-secondary-foreground no-underline font-bold rounded-lg transition-all duration-300 hover:bg-primary hover:scale-105"
        >
          {t.hero.contactBtn}
        </a>
      </div>
    </motion.section>
  );
};
