import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { LineIcon } from "./LineIcon";

type ButtonLinkVariant = "primary" | "secondary" | "white" | "dark" | "text";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  arrow?: boolean;
};

const variants: Record<ButtonLinkVariant, string> = {
  primary: "bg-[var(--clinic-primary)] text-white shadow-[0_8px_20px_rgba(14,165,233,0.2)] hover:bg-[var(--clinic-primary-hover)]",
  secondary: "border border-[var(--clinic-border)] bg-[var(--clinic-surface)] text-[var(--clinic-text-primary)] hover:border-[var(--clinic-primary)] hover:text-[var(--clinic-primary-hover)]",
  white: "bg-white text-slate-900 hover:bg-slate-50",
  dark: "bg-[#123a56] text-white hover:bg-[#0c2d45]",
  text: "bg-transparent text-[var(--clinic-primary-hover)] hover:text-[var(--clinic-text-primary)]",
};

export function ButtonLink({ href, children, variant = "primary", arrow = false, className, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--clinic-primary)]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <LineIcon name="arrow-right" size={16} />}
    </Link>
  );
}
