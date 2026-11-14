import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "muted"
  | "sch"
  | "chk"
  | "con"
  | "cmp"
  | "can";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-s-con-bg text-s-con-fg",
  muted: "bg-soft text-muted",
  sch: "bg-s-sch-bg text-s-sch-fg",
  chk: "bg-s-chk-bg text-s-chk-fg",
  con: "bg-s-con-bg text-s-con-fg",
  cmp: "bg-s-cmp-bg text-s-cmp-fg",
  can: "bg-s-can-bg text-s-can-fg",
};

// Pill بس. الـ domain logic (زي حالة الموعد) بيتعمل في StatusBadge
export default function Badge({ children, variant = "muted", dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-[7px] whitespace-nowrap rounded-pill px-3 py-1 text-xs font-bold",
        variants[variant],
        className
      )}
    >
      {dot && <span className="size-[7px] rounded-full bg-current" />}
      {children}
    </span>
  );
}