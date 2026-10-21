"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  dictionaries,
  languages,
  localizedPlaces,
  localizedStories,
  type Language,
  type LanguageMeta,
  type SiteDictionary,
} from "@/data/i18n";
import { stories as baseStories, type Story } from "@/data/stories";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  meta: LanguageMeta;
  dict: SiteDictionary;
  stories: Story[];
  storyById: Record<string, Story>;
  places: Array<{ name: string; x: number; y: number; storyId: string }>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function buildLocalizedStories(lang: Language): Story[] {
  const langOverrides = localizedStories[lang] || localizedStories.en;
  return baseStories.map((base) => {
    const loc = langOverrides[base.id] || localizedStories.en[base.id] || {};
    return {
      ...base,
      title: loc.title ?? base.title,
      subtitle: loc.subtitle ?? base.subtitle,
      chapterTitle: loc.chapterTitle ?? base.chapterTitle,
      body: loc.body ?? base.body,
      fact: loc.fact ?? base.fact,
      location: loc.location ?? base.location,
      coordinates: loc.coordinates ?? base.coordinates,
      readingTime: loc.readingTime ?? base.readingTime,
      hero: {
        ...base.hero,
        alt: loc.heroAlt ?? base.hero.alt,
      },
      gallery: base.gallery.map((img, idx) => ({
        ...img,
        alt: loc.galleryAlt?.[idx] ?? img.alt,
      })),
      video: base.video
        ? {
            ...base.video,
            title: loc.videoTitle ?? base.video.title,
            language: loc.videoLanguage ?? base.video.language,
            captions: loc.videoCaptions ?? base.video.captions,
            transcript: loc.videoTranscript ?? base.video.transcript,
          }
        : undefined,
    };
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load preferred language from localStorage if available
  useEffect(() => {
    try {
      const stored = localStorage.getItem("preferred_lang") as Language;
      if (stored && ["en", "ar", "fr", "zh"].includes(stored)) {
        setLanguageState(stored);
      }
    } catch {
      // LocalStorage unavailable in certain contexts
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // Ignore
    }
  };

  const meta = languages[language];
  const dict = dictionaries[language];
  const localizedStoriesList = buildLocalizedStories(language);
  const localizedPlacesList = localizedPlaces[language] || localizedPlaces.en;
  const storyById = Object.fromEntries(localizedStoriesList.map((s) => [s.id, s])) as Record<string, Story>;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = meta.dir;
      if (meta.dir === "rtl") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    }
  }, [language, meta.dir]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        meta,
        dict,
        stories: localizedStoriesList,
        storyById,
        places: localizedPlacesList,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
