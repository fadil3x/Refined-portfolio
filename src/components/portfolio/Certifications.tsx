import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Certifications = () => {
  const { t } = useLanguage();

  const certs = [
    {
      title: t.certifications.tcps2.title,
      description: t.certifications.tcps2.description,
    },
    {
      title: t.certifications.communityBuilder.title,
      description: t.certifications.communityBuilder.description,
    },
  ];

  return (
    <motion.section
      id="certifications"
      className="py-12 lg:py-16 px-[5%] md:px-[8%] bg-background text-foreground border-t border-primary/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl lg:text-4xl mb-6 text-primary font-bold text-center">
        {t.certifications.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-card p-6 rounded-xl border-l-4 border-primary shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">
              {cert.title}
            </h3>
            <p className="text-sm lg:text-base text-foreground/90 leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
