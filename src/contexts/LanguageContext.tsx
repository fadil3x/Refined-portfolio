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
    credlyBtn: string;
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
      greeting: "Hi, my name is Falilou!",
      bio: "I am a Dalhousie University alumni who graduated with a Bachelor of Science in Computer Science and an English Minor. My passion lies at the intersection of data and technology; I am eager to specialize in data science while remaining versatile enough to thrive in a wide range of developer roles. I look forward to contributing to impactful, data-driven development that makes a real difference.",
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
      credlyBtn: "View My Credly Badges",
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
      greeting: "Bonjour, je m'appelle Falilou !",
      bio: "Je suis diplômé de l'Université Dalhousie, titulaire d'un baccalauréat en sciences en informatique avec une mineure en anglais. Ma passion se situe à l'intersection des données et de la technologie ; je souhaite me spécialiser en science des données tout en conservant la polyvalence nécessaire pour exceller dans un large éventail de rôles de développeur. J'ai hâte de contribuer à des projets impactants, axés sur les données, qui font une réelle différence.",
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
      credlyBtn: "Voir Mes Badges Credly",
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
