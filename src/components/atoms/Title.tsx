import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface Props {
  size?: "sm" | "base" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "disabled" | "white" | "alt"|'dark';
  className?: string;
  center?: boolean;
  children: ReactNode;
}

export default function Title({
  size = "base",
  variant = "primary",
  className = "",
  center = false,
  children,
}: Props) {
  const sizes = {
    sm: "ds-text-sm",
    base: "text-base",
    md: "ds-text-md",
    lg: "ds-text-lg",
    xl: "ds-text-xl",
  };

  const variants = {
    primary: "ds-text-primary",
    secondary: "ds-text-secondary",
    disabled: "ds-text-disabled",
    white: "ds-text-white",
    dark: "text-gray-600",
    alt: "ds-text-alt",
  };
  return (
    <h2
      className={cn(
        "font-semibold",
        sizes[size],
        variants[variant],
        center ? "text-center" : "",
        className
      )}
    >
      {children}
    </h2>
  );
}
