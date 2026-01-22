import React from "react";
import me from "@/assets/hero/me2.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-row items-center justify-center gap-[50px] py-20 px-[10%] bg-color-dark text-foreground flex-wrap"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={me}
          alt="Image of Falilou"
          className="w-[350px] h-auto rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>
      <div className="flex-[2] flex flex-col gap-5">
        <h1 className="text-[2.8rem] text-primary">Hi, my name is Falilou</h1>
        <p className="text-[1.2rem] text-justify-word max-w-[600px]">
          I am a fourth-year Computer Science student minoring in English
          Literature. After completing my undergraduate studies, I hope to
          specialize in Machine Learning, specifically Computer Vision and Data
          Mining, because they relate to two of my interests: Graphic Design
          and Statistics. Growing up, I was not sure what I wanted to be, but my
          curiosity toward technology led me to the field I am in today. I feel
          very fortunate, and I hope to contribute to development that truly
          matters.
        </p>
        <div className="bg-foreground/5 p-4 px-5 border-l-4 border-primary rounded-lg">
          <h3 className="mb-2 text-primary font-semibold">
            Skills & Background
          </h3>
          <ul className="list-none p-0 m-0 space-y-1.5">
            <li>Programming Languages: C, Assembly, Python, Java.</li>
            <li>
              Spoken Languages: French (Fluent), English (Fluent), Spanish
              (Professional Working Proficiency), Wolof (Fluent).
            </li>
            <li>
              7+ years of experience in photoediting & video editing (Photoshop
              & Filmora).
            </li>
          </ul>
        </div>
        <a
          href="mailto:mouhamadouniang17@gmail.com"
          className="self-start py-2.5 px-5 bg-secondary text-color-dark no-underline font-bold rounded-lg mt-2.5 transition-all duration-300 hover:bg-primary hover:text-background"
        >
          Contact Me
        </a>
      </div>
    </motion.section>
  );
};
