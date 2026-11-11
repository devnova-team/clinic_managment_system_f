import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface TextProps {
  as?: "p" | "span";
  size?: "sm" | "base" | "lg" | "md" | "xl";
  variant?: "primary" | "secondary" | "alt" | "disabled" | "white" | "dark";
  className?: string;
  center?: boolean;
  children?: ReactNode;
}

const sizes = {
  sm: "text-[13px]",
  base: "text-sm",
  lg: "text-base",
  md: "text-[15px]",
  xl: "text-lg",
};

const variants = {
  primary: "text-ink",
  alt: "text-brand",
  secondary: "text-muted",
  disabled: "text-muted opacity-60",
  white: "text-white",
  dark: "text-muted",
};

export default function Text({
  as: Tag = "p",
  size = "base",
  variant = "primary",
  className,
  center = false,
  children,
}: TextProps) {
  return (
    <Tag className={cn(sizes[size], variants[variant], center && "text-center", className)}>
      {children}
    </Tag>
  );
}