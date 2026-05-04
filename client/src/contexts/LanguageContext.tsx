/*
 * LanguageContext — bilingual HU / EN switcher for grn.35
 * Soft Atelier design: cross-fade transitions handled by consumers.
 */
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "hu" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: <T extends Record<Lang, string>>(d: T) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hu";
    const saved = window.localStorage.getItem("grn35.lang");
    if (saved === "hu" || saved === "en") return saved;
    const nav = window.navigator.language?.toLowerCase() ?? "";
    return nav.startsWith("hu") ? "hu" : "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("grn35.lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === "hu" ? "en" : "hu"));
  const t = <T extends Record<Lang, string>>(d: T) => d[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
