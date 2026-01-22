import React, { useState } from "react";
import menuIcon from "@/assets/nav/menuIcon.png";
import closeIcon from "@/assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between pt-[61px] z-[2] mx-[10%]">
      <a
        className="text-[30px] font-semibold no-underline text-foreground"
        href="/"
      >
        Portfolio
      </a>
      <div className="flex flex-col items-end gap-[13px]">
        <img
          className="block w-10 h-10 cursor-pointer"
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full right-[10%] flex-col items-end gap-[13px] list-none rounded-xl p-6 bg-gradient-to-b from-background to-background/80 shadow-[0_4px_12px_rgba(240,122,122,0.3)] z-[5]`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#about"
              className="text-[25px] text-foreground no-underline hover:text-primary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[25px] text-foreground no-underline hover:text-primary transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[25px] text-foreground no-underline hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
