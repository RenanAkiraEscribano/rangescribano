import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, pt: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "en" ? "pt" : "en"));
  const t = (en: string, pt: string) => (lang === "en" ? en : pt);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
