import React, { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "green-compass-site-language";
const CHANGE_EVENT = "green-compass-language-change";
const LanguageContext = createContext({ language: "en", setLanguage: () => {} });

function getLanguageSnapshot() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "bg" || stored === "en") return stored;
  return window.navigator.language?.toLowerCase().startsWith("bg") ? "bg" : "en";
}

function subscribeToLanguage(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function LanguageProvider({ children }) {
  const language = useSyncExternalStore(subscribeToLanguage, getLanguageSnapshot, () => "en");
  const setLanguage = useCallback((nextLanguage) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
