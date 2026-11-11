import { cn } from "@/lib/cn";

// نفس ترتيب PAL في الـ HTML
const PALETTE: [string, string][] = [
  ["bg-av-amber-bg", "text-av-amber-fg"],
  ["bg-av-teal-bg", "text-av-teal-fg"],
  ["bg-av-lilac-bg", "text-av-lilac-fg"],
  ["bg-av-rose-bg", "text-av-rose-fg"],
  ["bg-av-sage-bg", "text-av-sage-fg"],
  ["bg-av-mint-bg", "text-av-mint-fg"],
];

function hash(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(h);
}

function initials(name: string) {
  return name
    .replace(/^(Dr\.|د\.)\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

interface AvatarProps {
  name: string;
  size?: "md" | "lg";
  tone?: "auto" | "owner";
}

export default function Avatar({ name, size = "md", tone = "auto" }: AvatarProps) {
  const [bg, fg] =
    tone === "owner" ? ["bg-av-owner-bg", "text-av-owner-fg"] : PALETTE[hash(name) % PALETTE.length];

  return (
    <span
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full font-bold",
        size === "lg" ? "size-[68px] text-[22px]" : "size-[38px] text-[13px]",
        bg,
        fg
      )}
    >
      {initials(name)}
    </span>
  );
}