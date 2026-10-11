"use client";

import { useState } from "react";
import Link from "next/link";
import { CarePointLogo } from "@/components/atoms/CarePointLogo";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { LineIcon } from "@/components/atoms/LineIcon";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "About Us", href: "#about" },
];

export function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <CarePointLogo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} className={`text-xs font-bold transition hover:text-[var(--clinic-primary-hover)] ${index === 0 ? "text-[var(--clinic-primary-hover)]" : "text-slate-600"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/login" variant="secondary" className="min-h-10 px-4 text-xs">Log in</ButtonLink>
          <ButtonLink href="/login" arrow className="min-h-10 px-4 text-xs">Book an Appointment</ButtonLink>
        </div>
        <button type="button" className="grid size-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <LineIcon name={menuOpen ? "close" : "menu"} size={21} />
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700">{item.label}</Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <ButtonLink href="/login" variant="secondary" className="w-full text-xs">Log in</ButtonLink>
              <ButtonLink href="/login" className="w-full text-xs">Book Appointment</ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
