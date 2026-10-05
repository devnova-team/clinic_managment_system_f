import React, { forwardRef } from "react";

interface RadioInputProps {
  id: string;
  label: string;
  value: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ id, disabled = false, label, value, name, checked, onChange, onBlur }, ref) => {
    return (
      <label htmlFor={id} className="flex cursor-pointer items-center gap-2">
        <input
          ref={ref}
          id={id}
          type="radio"
          disabled={disabled}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span>{label}</span>
      </label>
    );
  }
);

RadioInput.displayName = "RadioInput";

export default RadioInput;