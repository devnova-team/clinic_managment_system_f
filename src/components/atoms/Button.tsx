import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline1" | "none" | "white" | "outline2";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  center?: boolean;
  isRounded?: boolean;
  onClick?:()=>void
}
const Button = ({
  children,
  variant = "primary",
  size = "lg",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  center = false,
  isRounded = false,

  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 hover:scale-[1.04] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed px-1.25 py-0.75 rounded-md";

  const variants = {
    primary:
      "ds-bg-primary text-white capitalize focus:ring-blue-500 cursor-pointer hover:opacity-95 ",
    secondary:
      "ds-bg-secondary text-white capitalize hover:opacity-95 focus:ring-secondary-600 cursor-pointer",
    white: "ds-bg-alt ds-text-alt border-2   cursor-pointer",
    outline1:
      "ds-border-primary ds-text-alt border-2 border-white capitalize focus:ds-border-sm  cursor-pointer",
    outline2:
      "border-gray-300 text-disabled border-2  capitalize focus:ds-border-sm  cursor-pointer",

    none: "cursor-pointer",
  };
  const sizes = {
    sm: "!px-3 !py-2 text-sm",
    md: "!px-4 !py-2 text-sm md:!px-5 md:!py-2.5 md:text-md",
    lg: "!px-5 !py-2.5 text-md md:!px-6 md:!py-4 md:!text-lg",
  };
  const content = (
    <button
      type={type}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        isRounded ? "rounded-full" : "rounded-md",
        // bgBtn ? bgVariants[bgBtn] : "",
        className
      )}


      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className={cn(center ? "flex justify-center" : "", fullWidth ? "w-full" : "")}>
      {content}
    </div>
  );
};

export default Button;
