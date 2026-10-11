import Link from "next/link";

export function CarePointLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 rounded-lg" aria-label="CarePoint Clinic Management home">
      <span className="grid size-10 place-items-center rounded-xl bg-[var(--clinic-primary)] text-white shadow-sm">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".35" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-[-0.04em] ${light ? "text-white" : "text-[var(--clinic-text-primary)]"}`}>CarePoint</span>
        <span className={`mt-1 text-[8px] font-bold uppercase tracking-[0.19em] ${light ? "text-white/65" : "text-[var(--clinic-text-secondary)]"}`}>Clinic Management</span>
      </span>
    </Link>
  );
}
