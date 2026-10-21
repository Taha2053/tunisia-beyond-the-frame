"use client";

import { useLanguage } from "@/context/LanguageContext";
import { languages, type Language } from "@/data/i18n";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage, dict } = useLanguage();

  const langList: Language[] = ["en", "ar", "fr", "zh"];

  return (
    <div className={`lang-switcher ${className}`} role="group" aria-label={dict.nav.langSelectLabel}>
      {langList.map((lang) => {
        const item = languages[lang];
        const isActive = language === lang;
        return (
          <button
            key={lang}
            type="button"
            className={`lang-btn ${isActive ? "active" : ""}`}
            onClick={() => setLanguage(lang)}
            aria-current={isActive ? "true" : undefined}
            aria-label={`${item.name} (${item.nativeName})`}
            lang={lang}
            dir={item.dir}
          >
            {item.nativeName}
          </button>
        );
      })}
    </div>
  );
}
