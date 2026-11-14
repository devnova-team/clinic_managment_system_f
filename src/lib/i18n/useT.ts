"use client";

import { useEffect, useState } from "react";
import { en } from "./en";
import { ar } from "./ar";

export function useT() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const read = () => setLang(document.documentElement.lang === "ar" ? "ar" : "en");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  const dict = lang === "ar" ? ar : en;
  return (key: string) => dict[key] ?? en[key] ?? key;
}