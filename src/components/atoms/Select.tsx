"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type SelectHTMLAttributes } from "react";
import Text from "./Text";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  error?: string;
  id?: string;
  className?: string;
}

// Shared dropdown. Extracted from the edit-survey status field so the same
// control backs the survey status and the question-type pickers.
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, error, id, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-2 block">
            <Text variant="primary" size="md">
              {label}
            </Text>
          </label>
        )}

        <select
          ref={ref}
          id={id}
          className={cn(
            "ds-bg-alt ds-text-primary ds-border-muted w-full rounded-md border !px-4 !py-2.5 transition outline-none focus:border-black dark:focus:border-white",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <p className="!mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;