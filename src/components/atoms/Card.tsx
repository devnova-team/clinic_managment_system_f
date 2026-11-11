import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

export default function Card({ dark = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-card p-6 shadow-card",
        dark ? "border border-rail bg-rail text-white" : "border border-line bg-surface",
        className
      )}
      {...props}
    />
  );
}