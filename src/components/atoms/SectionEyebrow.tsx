import type { ReactNode } from "react";

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] ${light ? "text-sky-100" : "text-[var(--clinic-primary-hover)]"}`}>
      <span className={`inline-block size-1.5 rounded-full ${light ? "bg-emerald-300" : "bg-[var(--clinic-secondary)]"}`} />
      {children}
    </p>
  );
}
