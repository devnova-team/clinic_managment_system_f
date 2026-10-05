"use client";
import { Eye, EyeOff,AsteriskIcon } from "@/assets/icons/icons";

import { cn } from "@/lib/cn";
import { InputHTMLAttributes, ReactNode, useState, forwardRef } from "react";
import Text from "./Text";
import Icon from "./Icon";
// import { Eye, EyeOff } from "@/assets/icons/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  border?: boolean;
  id?: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  showPasswordToggle?: boolean;
  required?:boolean
  disabled?:boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = "",
      border = true,
      id,
      leftIcon,
      rightIcon,
      showPasswordToggle,
      type = "text",
      required=false,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType =
      showPasswordToggle && type === "password" ? (showPassword ? "text" : "password") : type;
    return (
      <div className="w-full !p-2 flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="flex gap-3 ">
            <Text variant="primary" size="md">
              {label}
            </Text>
            {required&& <Icon IconComponent={AsteriskIcon } color="danger" size={14} className="self-start"/>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={cn(
              "bg-disabled w-full rounded-md !py-3 !px-2",
              leftIcon && "!px-10",
              rightIcon && "!px-10",
              border && "border ds-border-muted" ,
              error && "border border-red-500",
              className
            )}
            type={inputType}
            {...props}
          />
          {showPasswordToggle ? (
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute end-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
          ) : (
            rightIcon && <div className="absolute end-3 top-1/2 -translate-y-1/2">{rightIcon}</div>
          )}
        </div>

        {error && <p className="!mt-1 text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
