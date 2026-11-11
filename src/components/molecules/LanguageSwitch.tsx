"use client";

import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";

type Lang = "en" | "ar";

export default function LanguageSwitch() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "en";
    setLang(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const choose = (next: Lang) => {
    localStorage.setItem("lang", next);
    setLang(next);
    // useT بيقرأ الـ lang عند كل render، فلازم نعمل reload أو نرفع الـ state لـ context
    window.location.reload();
  };

  return (
    <div className="inline-flex gap-0.5 rounded-control border border-line bg-surface p-1" role="group" aria-label="Language">
      {(["en", "ar"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => choose(l)}
          aria-pressed={lang === l}
          className={`rounded-[10px] px-3.5 py-2 font-bold ${
            lang === l ? "bg-brand text-brand-ink" : "text-muted"
          }`}
        >
          {l === "en" ? "EN" : "عربي"}
        </button>
      ))}
    </div>
  );
}