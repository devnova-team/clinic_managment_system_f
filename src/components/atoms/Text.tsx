import { cn } from "@/lib/cn";
import React, { ReactNode } from "react";

interface Props {
  as?: "p" | "span";
  size?: "sm" | "base" | "lg" | "md" | "xl";
  variant?: "primary" | "secondary" | "alt" | "disabled" | "white" | "dark";
  className?: string;
  center?: boolean;
  children?: ReactNode;
}

export default function Text({
  as: Tag = "p",
  size = "base",
  variant = "primary",
  className,
  center = false,
  children,
}: Props) {
  const sizes = {
    sm: "ds-text-sm",
    base: "ds-text-base",
    lg: "ds-text-lg",
    md: "ds-text-md",
    xl: "ds-text-xl",
  };

  const variants = {
    primary: "ds-text-primary",
    alt: "ds-text-alt",
    secondary: "ds-text-secondary",
    disabled: "ds-text-disabled",
    white: "ds-text-white",
    dark: "text-gray-600",
  };
  return (
    <Tag className={cn(sizes[size], variants[variant], center ? "text-center" : "", className)}>
      {children}
    </Tag>
  );
}
