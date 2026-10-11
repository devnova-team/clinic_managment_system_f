import type { SVGProps } from "react";

export type LineIconName =
  | "check"
  | "plus"
  | "shield"
  | "arrow-right"
  | "chevron-left"
  | "chevron-right"
  | "calendar"
  | "clock"
  | "heart"
  | "stethoscope"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "location";

type LineIconProps = SVGProps<SVGSVGElement> & {
  name: LineIconName;
  size?: number;
};

/** Small shared icon atom. Keeps this page independent from extra icon packages. */
export function LineIcon({ name, size = 20, ...props }: LineIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };

  switch (name) {
    case "check":
      return <svg {...common}><path d="m5 12 4.2 4.2L19 6.8" /></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 19 6v5c0 4.7-3 8-7 10-4-2-7-5.3-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "arrow-right":
      return <svg {...common}><path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" /></svg>;
    case "chevron-left":
      return <svg {...common}><path d="m14.5 5-7 7 7 7" /></svg>;
    case "chevron-right":
      return <svg {...common}><path d="m9.5 5 7 7-7 7" /></svg>;
    case "calendar":
      return <svg {...common}><rect x="3.5" y="5.5" width="17" height="15" rx="2.5" /><path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg>;
    case "heart":
      return <svg {...common}><path d="M20.4 8.6c0 4.1-8.4 10-8.4 10s-8.4-5.9-8.4-10A4.4 4.4 0 0 1 12 6.2a4.4 4.4 0 0 1 8.4 2.4Z" /></svg>;
    case "stethoscope":
      return <svg {...common}><path d="M6 4.5v5a4 4 0 0 0 8 0v-5M4 4.5h4M12 4.5h4M16 14a4 4 0 0 0 8 0v-1" /><circle cx="20" cy="10" r="2" /><path d="M10 13.5v2a5 5 0 0 0 10 0v-1" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 6.5h16M4 12h16M4 17.5h16" /></svg>;
    case "close":
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "phone":
      return <svg {...common}><path d="M7.1 3.8 9.6 7l-1.5 2.1a14 14 0 0 0 6.8 6.8l2.1-1.5 3.2 2.5-.6 3a2 2 0 0 1-2.2 1.6C9 18.4 5.6 15 3.9 6.6a2 2 0 0 1 1.6-2.2l1.6-.6Z" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
    case "location":
      return <svg {...common}><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>;
  }
}
