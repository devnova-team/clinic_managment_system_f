"use client";

import { useEffect, useState } from "react";

// المؤقت بيحسب من startedAt اللي جاي من السيرفر، فالـ refresh ما بيصفرهوش
export function useElapsedTimer(startedAt: string | null) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!startedAt) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [startedAt]);

  if (!startedAt) return "--:--";

  const s = Math.max(0, Math.floor((now - new Date(startedAt).getTime()) / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}