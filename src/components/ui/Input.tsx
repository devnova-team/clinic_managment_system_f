import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, id, className = '', ...props }: InputProps) {
  return (
    <label className="block space-y-1.5" htmlFor={id}>
      {label ? <span className="text-sm font-medium text-slate-700">{label}</span> : null}
      <input
        id={id}
        className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 disabled:bg-slate-100 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''} ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
