import React from "react";
import design1 from "@/assets/projects/Img2.png";
import design2 from "@/assets/projects/Img3.png";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-[10%] bg-color-dark text-foreground">
      <h2 className="text-[2.5rem] mb-10 text-primary text-center">Projects</h2>

      {/* Hepatocatcher */}
      <motion.div
        className="mb-[60px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[1.8rem] mb-5 text-secondary">
          Hepatocatcher — Histology Image Analysis
        </h3>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="w-full max-w-[400px] aspect-video bg-muted rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center justify-center text-muted-foreground">
            <p className="text-center p-4">
              Demo video available on{" "}
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
          <div className="flex-1 text-justify-word min-w-[280px]">
            <p className="mb-3 leading-relaxed">
              My first Computer Vision project is a smart filter for histology
              images called Hepatocatcher which I designed for one of my finals.
              As the name suggests, it's designed to identify and count
              hepatocytes — the cells found in the liver. This filter can help
              researchers track changes or patterns in liver tissue during
              medical studies. Using a mix of image segmentation, edge
              detection, and classification techniques, our code isolates
              hepatocytes from surrounding tissue, outlines their shapes, and
              confirms whether the cells are indeed hepatocytes or another type.
              The goal is to produce a filtered image with hepatocytes clearly
              highlighted, along with a second version where they're marked in
              green and the total count is displayed. That said, the filter's
              accuracy can drop with large variations in staining intensity or
              color. Overlapping cells and background noise also make
              segmentation and classification more difficult, which highlights
              some of the current limitations of our code.
            </p>
            <a
              className="text-primary font-bold no-underline hover:underline"
              href="https://github.com/fadil3x/Hepatocatcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the code on GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Graphic Design */}
      <motion.div
        className="mb-[60px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[1.8rem] mb-5 text-secondary">
          Graphic Design and Visual Editing
        </h3>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="flex-1 text-justify-word min-w-[280px]">
            <p className="mb-3 leading-relaxed">
              I started doing graphic design when I was 17, during my second
              year of the IB. At first, it was just a way to create phone
              wallpapers and memes for my creativity hours — but over time, it
              became something deeper. It gave me a way to explore different
              parts of myself, and understand how the human eye responds to
              colors and shapes to create visually appealing images. Years
              later, this creative path brought me closer to computer vision, as
              I began to study how both humans and machines perceive visuals.
              That theory helped explain many of the things I used to notice
              intuitively back in my teens. These days, I mostly edit photos for
              logo designs or branding projects, but the same creativity has
              also shaped the video edits I've done throughout my university
              years.
            </p>
            <a
              className="text-primary font-bold no-underline hover:underline"
              href="https://icedrive.net/s/kVSxTgviuS1X8xQizNYYRT2zQNRy"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my video edit portfolio on Dropbox
            </a>
          </div>
          <div className="flex gap-5 flex-wrap">
            <img
              src={design1}
              alt="Design sample 1"
              className="w-[180px] h-auto rounded-lg object-cover shadow-[0_0_5px_rgba(255,255,255,0.1)]"
            />
            <img
              src={design2}
              alt="Design sample 2"
              className="w-[180px] h-auto rounded-lg object-cover shadow-[0_0_5px_rgba(255,255,255,0.1)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
