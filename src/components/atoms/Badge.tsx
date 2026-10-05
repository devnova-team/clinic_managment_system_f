import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeVariant = "primary" | "muted";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  primary: "ds-primary-200 ds-text-alt",
  muted: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
};

// Generic pill/tag. Domain-specific badges (e.g. survey StatusBadge) can be
// built on top of this instead of re-styling from scratch.
export default function Badge({ children, variant = "muted", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-md !px-3 !py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}