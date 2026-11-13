import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface Translations {
  nav: {
    portfolio: string;
    about: string;
    projects: string;
    certifications: string;
    resume: string;
    contact: string;
  };
  hero: {
    greeting: string;
    bio: string;
    skillsTitle: string;
    programmingLang: string;
    spokenLang: string;
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
    xiffNa: {
      title: string;
      description: string;
      viewProject: string;
    };
  };
  certifications: {
    title: string;
    tcps2: {
      title: string;
      description: string;
    };
    communityBuilder: {
      title: string;
      description: string;
    };
  };
  resume: {
    title: string;
    description: string;
    downloadBtn: string;
    meta: string;
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
      certifications: "Certifications",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is Falilou!",
      bio: "I am a Dalhousie University alumni who graduated with a Bachelor of Science in Computer Science and an English Minor. My passion lies at the intersection of data and technology; I am eager to specialize in data science while remaining versatile enough to thrive in a wide range of developer roles. I look forward to contributing to impactful, data-driven development that makes a real difference.",
      skillsTitle: "Skills & Background",
      programmingLang: "Programming Languages: C, Assembly, Python, Java.",
      spokenLang: "Spoken Languages: French (Fluent), English (Fluent), Spanish (Professional Working Proficiency), Wolof (Fluent).",
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
      xiffNa: {
        title: "Xiff-Na — Fast-Food Directory for Senegal",
        description: "Xiff-Na is a web-based fast-food directory built for Senegal, starting with Dakar. It aggregates real restaurant data from Google Maps and presents it through an intuitive interface where users can filter by neighborhood, cuisine type, and proximity. The platform showcases photos, ratings, opening hours, and contact information — making it easy for anyone to discover and order from nearby fast-food spots. This project reflects my interest in data aggregation, user experience design, and building practical tools for local communities.",
        viewProject: "Visit Xiff-Na",
      },
    },
    certifications: {
      title: "Certifications",
      tcps2: {
        title: "TCPS 2: CORE 2022",
        description: "Completed a course on research ethics based on the Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans, demonstrating a strong understanding of ethical standards in research practices.",
      },
      communityBuilder: {
        title: "Dalhousie Residence Life — Outstanding Community Builder",
        description: "Recognized for demonstrating a lasting commitment to supporting peers and residents, and a willingness to develop meaningful relationships with teammates and within the Residence community.",
      },
    },
    resume: {
      title: "Resume",
      description:
        "Grab a copy of my current resume — education, technical skills, projects, certifications and volunteer experience in one PDF.",
      downloadBtn: "Download My Resume",
      meta: "PDF · 2 pages",
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
      certifications: "Certifications",
      resume: "CV",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je m'appelle Falilou !",
      bio: "Je suis diplômé de l'Université Dalhousie, titulaire d'un baccalauréat en sciences en informatique avec une mineure en anglais. Ma passion se situe à l'intersection des données et de la technologie ; je souhaite me spécialiser en science des données tout en conservant la polyvalence nécessaire pour exceller dans un large éventail de rôles de développeur. J'ai hâte de contribuer à des projets impactants, axés sur les données, qui font une réelle différence.",
      skillsTitle: "Compétences & Parcours",
      programmingLang: "Langages de programmation : C, Assembly, Python, Java.",
      spokenLang: "Langues parlées : Français (Courant), Anglais (Courant), Espagnol (Niveau professionnel), Wolof (Courant).",
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
      xiffNa: {
        title: "Xiff-Na — Annuaire de Fast-Foods au Sénégal",
        description: "Xiff-Na est un annuaire de fast-foods en ligne conçu pour le Sénégal, en commençant par Dakar. Il agrège des données réelles de restaurants via Google Maps et les présente à travers une interface intuitive permettant de filtrer par quartier, type de cuisine et proximité. La plateforme affiche des photos, des notes, les horaires d'ouverture et les coordonnées — facilitant la découverte et la commande auprès des fast-foods à proximité. Ce projet reflète mon intérêt pour l'agrégation de données, la conception d'expérience utilisateur et la création d'outils pratiques pour les communautés locales.",
        viewProject: "Visiter Xiff-Na",
      },
    },
    certifications: {
      title: "Certifications",
      tcps2: {
        title: "TCPS 2 : CORE 2022",
        description: "Formation sur l'éthique de la recherche basée sur la Déclaration de politique des trois conseils : Conduite éthique de la recherche impliquant des êtres humains, démontrant une solide compréhension des normes éthiques en matière de recherche.",
      },
      communityBuilder: {
        title: "Dalhousie Residence Life — Outstanding Community Builder",
        description: "Reconnu pour avoir démontré un engagement durable envers le soutien aux pairs et aux résidents, ainsi qu'une volonté de développer des relations significatives avec les coéquipiers et au sein de la communauté résidentielle.",
      },
    },
    resume: {
      title: "Mon CV",
      description:
        "Téléchargez une copie de mon CV à jour — formation, compétences techniques, projets, certifications et expérience bénévole en un seul PDF.",
      downloadBtn: "Télécharger mon CV",
      meta: "PDF · 2 pages",
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
