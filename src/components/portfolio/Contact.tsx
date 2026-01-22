import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-[100px] px-[10%] text-center bg-background text-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-[2.5rem] mb-5 text-primary">Contact</h2>
      <p className="text-[1.1rem] mb-10 max-w-[600px] mx-auto leading-relaxed">
        Feel free to reach out if you'd like to collaborate, ask about my work,
        or just say hello.
      </p>
      <a
        href="mailto:mouhamadouniang17@gmail.com"
        className="inline-block py-3 px-[30px] bg-secondary text-color-dark font-bold no-underline rounded-lg transition-all duration-300 hover:bg-primary hover:text-background"
      >
        Send Me an Email
      </a>
    </motion.section>
  );
};
