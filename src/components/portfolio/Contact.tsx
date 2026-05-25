import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="contact"
      className="py-12 lg:py-16 px-[5%] md:px-[8%] text-center bg-card text-foreground border-t border-primary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl lg:text-4xl mb-4 text-primary font-bold">{t.contact.title}</h2>
      <p className="text-base lg:text-lg mb-6 max-w-[500px] mx-auto leading-relaxed text-foreground/90">
        {t.contact.description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.a
          href="mailto:mufalilouniang@gmail.com"
          className="inline-block py-3 px-8 bg-secondary text-secondary-foreground font-bold no-underline rounded-lg transition-all duration-300 hover:bg-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.contact.emailBtn}
        </motion.a>
        <motion.a
          href="https://www.credly.com/users/mouhamadou-niang.fd2bcf9f"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-8 bg-transparent border-2 border-primary text-primary font-bold no-underline rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.contact.credlyBtn}
        </motion.a>
      </div>
    </motion.section>
  );
};
