"use client";
import { cn } from "@/lib/cn";
import { ReactNode, TextareaHTMLAttributes } from "react";
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
          <Text variant="primary"> {label}</Text>
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "bg-disabled w-full rounded-md !px-3 !py-3",
          border && "border border-[var(--color-text-disabled)]",
          error && "border border-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <Text variant="disabled" className="text-red-500">
          {error}
        </Text>
      )}
      {children}
    </>
  );
}
