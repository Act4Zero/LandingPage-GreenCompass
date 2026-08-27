import React from "react";
import { useLanguage } from "context/LanguageContext";

function LanguageSwitcher({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex rounded-full border border-forest/15 bg-white p-1 ${className}`} role="group" aria-label={language === "bg" ? "Избор на език" : "Language selection"}>
      {[
        ["bg", "BG", "Български"],
        ["en", "EN", "English"],
      ].map(([value, shortLabel, label]) => (
        <button
          key={value}
          type="button"
          onClick={() => setLanguage(value)}
          aria-label={label}
          aria-pressed={language === value}
          className={`rounded-full px-3 py-1.5 text-xs font-extrabold tracking-[0.12em] transition ${
            language === value ? "bg-forest text-white" : "text-forest/65 hover:text-forest"
          }`}
        >
          {shortLabel}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
