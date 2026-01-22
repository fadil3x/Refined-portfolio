import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/50 bg-card/50 backdrop-blur-sm text-sm font-medium text-foreground hover:bg-primary/20 hover:border-primary transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={language === "en" ? "text-primary font-bold" : "text-muted-foreground"}>EN</span>
      <span className="text-muted-foreground">/</span>
      <span className={language === "fr" ? "text-primary font-bold" : "text-muted-foreground"}>FR</span>
    </motion.button>
  );
};
