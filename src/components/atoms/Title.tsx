import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface TitleProps {
  size?: "sm" | "base" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "disabled" | "white" | "alt" | "dark";
  className?: string;
  center?: boolean;
  children: ReactNode;
}

const sizes = {
  sm: "text-[15px]",
  base: "text-base",
  md: "text-lg",
  lg: "text-[21px]",
  xl: "text-[28px]",
};

const variants = {
  primary: "text-ink",
  secondary: "text-muted",
  disabled: "text-muted opacity-60",
  white: "text-white",
  alt: "text-brand",
  dark: "text-muted",
};

export default function Title({
  size = "base",
  variant = "primary",
  className = "",
  center = false,
  children,
}: TitleProps) {
  return (
    <h2
      className={cn(
        "font-display font-bold tracking-[-0.01em]",
        sizes[size],
        variants[variant],
        center && "text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}