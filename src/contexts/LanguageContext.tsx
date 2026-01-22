import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface Translations {
  nav: {
    portfolio: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    bio: string;
    skillsTitle: string;
    programmingLang: string;
    spokenLang: string;
    experience: string;
    contactBtn: string;
  };
  projects: {
    title: string;
    hepatocatcher: {
      title: string;
      description: string;
      viewCode: string;
      demoText: string;
    };
    graphicDesign: {
      title: string;
      description: string;
      viewPortfolio: string;
    };
  };
  contact: {
    title: string;
    description: string;
    emailBtn: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      portfolio: "Portfolio",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is Falilou",
      bio: "I am a fourth-year Computer Science student minoring in English Literature. After completing my undergraduate studies, I hope to specialize in Machine Learning, specifically Computer Vision and Data Mining, because they relate to two of my interests: Graphic Design and Statistics. Growing up, I was not sure what I wanted to be, but my curiosity toward technology led me to the field I am in today. I feel very fortunate, and I hope to contribute to development that truly matters.",
      skillsTitle: "Skills & Background",
      programmingLang: "Programming Languages: C, Assembly, Python, Java.",
      spokenLang: "Spoken Languages: French (Fluent), English (Fluent), Spanish (Professional Working Proficiency), Wolof (Fluent).",
      experience: "7+ years of experience in photoediting & video editing (Photoshop & Filmora).",
      contactBtn: "Contact Me",
    },
    projects: {
      title: "Projects",
      hepatocatcher: {
        title: "Hepatocatcher — Histology Image Analysis",
        description: "My first Computer Vision project is a smart filter for histology images called Hepatocatcher which I designed for one of my finals. As the name suggests, it's designed to identify and count hepatocytes — the cells found in the liver. This filter can help researchers track changes or patterns in liver tissue during medical studies. Using a mix of image segmentation, edge detection, and classification techniques, our code isolates hepatocytes from surrounding tissue, outlines their shapes, and confirms whether the cells are indeed hepatocytes or another type.",
        viewCode: "View the code on GitHub",
        demoText: "Demo video available on",
      },
      graphicDesign: {
        title: "Graphic Design and Visual Editing",
        description: "I started doing graphic design when I was 17, during my second year of the IB. At first, it was just a way to create phone wallpapers and memes for my creativity hours — but over time, it became something deeper. It gave me a way to explore different parts of myself, and understand how the human eye responds to colors and shapes to create visually appealing images. Years later, this creative path brought me closer to computer vision, as I began to study how both humans and machines perceive visuals.",
        viewPortfolio: "View my video edit portfolio",
      },
    },
    contact: {
      title: "Contact",
      description: "Feel free to reach out if you'd like to collaborate, ask about my work, or just say hello.",
      emailBtn: "Send Me an Email",
    },
  },
  fr: {
    nav: {
      portfolio: "Portfolio",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je m'appelle Falilou",
      bio: "Je suis étudiant en quatrième année d'informatique avec une mineure en littérature anglaise. Après mes études de premier cycle, j'espère me spécialiser en apprentissage automatique, notamment en vision par ordinateur et en exploration de données, car ils sont liés à deux de mes intérêts : le design graphique et les statistiques. En grandissant, je n'étais pas sûr de ce que je voulais devenir, mais ma curiosité envers la technologie m'a conduit vers le domaine où je suis aujourd'hui. Je me sens très chanceux et j'espère contribuer à un développement qui compte vraiment.",
      skillsTitle: "Compétences & Parcours",
      programmingLang: "Langages de programmation : C, Assembly, Python, Java.",
      spokenLang: "Langues parlées : Français (Courant), Anglais (Courant), Espagnol (Niveau professionnel), Wolof (Courant).",
      experience: "7+ ans d'expérience en retouche photo et montage vidéo (Photoshop & Filmora).",
      contactBtn: "Me Contacter",
    },
    projects: {
      title: "Projets",
      hepatocatcher: {
        title: "Hepatocatcher — Analyse d'Images Histologiques",
        description: "Mon premier projet de vision par ordinateur est un filtre intelligent pour les images histologiques appelé Hepatocatcher, que j'ai conçu pour l'un de mes examens finaux. Comme son nom l'indique, il est conçu pour identifier et compter les hépatocytes — les cellules trouvées dans le foie. Ce filtre peut aider les chercheurs à suivre les changements ou les motifs dans les tissus hépatiques lors d'études médicales. En utilisant un mélange de segmentation d'image, de détection de contours et de techniques de classification, notre code isole les hépatocytes du tissu environnant.",
        viewCode: "Voir le code sur GitHub",
        demoText: "Vidéo de démonstration disponible sur",
      },
      graphicDesign: {
        title: "Design Graphique et Édition Visuelle",
        description: "J'ai commencé le design graphique à 17 ans, pendant ma deuxième année du BI. Au début, c'était juste un moyen de créer des fonds d'écran et des mèmes pour mes heures de créativité — mais avec le temps, c'est devenu quelque chose de plus profond. Cela m'a donné un moyen d'explorer différentes parties de moi-même et de comprendre comment l'œil humain répond aux couleurs et aux formes pour créer des images visuellement attrayantes. Des années plus tard, ce chemin créatif m'a rapproché de la vision par ordinateur.",
        viewPortfolio: "Voir mon portfolio de montages vidéo",
      },
    },
    contact: {
      title: "Contact",
      description: "N'hésitez pas à me contacter si vous souhaitez collaborer, poser des questions sur mon travail, ou simplement dire bonjour.",
      emailBtn: "M'Envoyer un Email",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
