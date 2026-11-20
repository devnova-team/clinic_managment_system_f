import React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "danger" | "ghost";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: Variant;
}

const VARIANTS = {
  primary: "bg-[#115E59] text-white shadow-sm",
  secondary: "bg-[#1D4ED8] text-white shadow-sm",
  danger: "bg-[#991B1B] text-white shadow-sm",
  ghost: "bg-transparent text-gray-500 hover:text-gray-800",
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  variant,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3.5 py-1.5 text-[12px] font-semibold transition-all",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default ActionButton;