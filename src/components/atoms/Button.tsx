import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "mint" | "danger" | "white" | "outline1" | "outline2" | "none";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  center?: boolean;
  isRounded?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-bold transition duration-200 hover:brightness-105 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100 cursor-pointer";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand text-brand-ink",
  secondary: "bg-ink text-white",
  mint: "bg-mint text-mint-ink",
  danger: "bg-danger text-danger-ink",
  white: "bg-surface text-ink border-2 border-line",
  outline1: "bg-transparent text-brand border-2 border-brand",
  outline2: "bg-surface text-muted border-2 border-line",
  none: "",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3.5 py-2 text-[13px] rounded-xl",
  md: "px-4 py-2.5 text-sm",
  lg: "px-[18px] py-3 text-[15px]",
};

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  disabled = false,
  loading = false,
  fullWidth = false,
  center = false,
  isRounded = false,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  const button = (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        isRounded ? "rounded-pill" : "rounded-control",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );

  // بنلف بـ div بس لو محتاجين محاذاة أو عرض كامل، عشان ما نكسرش الـ inline layout في الجداول
  if (center || fullWidth) {
    return <div className={cn(center && "flex justify-center", fullWidth && "w-full")}>{button}</div>;
  }
  return button;
}
