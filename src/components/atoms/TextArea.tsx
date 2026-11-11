"use client";
import { cn } from "@/lib/cn";
import type { ReactNode, TextareaHTMLAttributes } from "react";
import Text from "./Text";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
  label?: string;
  error?: string;
  border?: boolean;
  id: string;
  className?: string;
}

export default function Textarea({
  children,
  label,
  error,
  className = "",
  border = false,
  id,
  ...props
}: TextareaProps) {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          <Text variant="primary">{label}</Text>
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full min-h-[140px] resize-y rounded-control bg-surface px-[15px] py-[13px] placeholder:text-muted",
          border ? "border border-line" : "border border-transparent",
          error && "border-danger",
          className
        )}
        {...props}
      />
      {error && <Text variant="disabled" className="text-danger">{error}</Text>}
      {children}
    </>
  );
}
