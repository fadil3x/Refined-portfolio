import React, { useState } from "react";
import menuIcon from "@/assets/nav/menuIcon.png";
import closeIcon from "@/assets/nav/closeIcon.png";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-4 px-[5%] md:px-[8%] bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <a
        className="text-2xl font-semibold no-underline text-foreground hover:text-primary transition-colors"
        href="/"
      >
        {t.nav.portfolio}
      </a>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <div className="flex flex-col items-end">
          <img
            className="block w-8 h-8 cursor-pointer md:hidden"
            src={menuOpen ? closeIcon : menuIcon}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            <li>
              <a
                href="#about"
                className="text-base text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-base text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-base text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.certifications}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-base text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
          {/* Mobile nav */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:hidden absolute top-full right-[5%] flex-col items-end gap-3 list-none rounded-xl p-5 bg-card/95 backdrop-blur-sm shadow-lg border border-primary/20 z-50`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a
                href="#about"
                className="text-lg text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-lg text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.certifications}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg text-foreground no-underline hover:text-primary transition-colors"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
