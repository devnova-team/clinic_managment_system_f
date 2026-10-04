import type { ReactNode } from 'react';

type BadgeVariant = 'confirmed' | 'completed' | 'cancelled' | 'pending' | 'suspended';

type BadgeProps = { variant: BadgeVariant; children: ReactNode };

const styles: Record<BadgeVariant, string> = {
  confirmed: 'bg-green-100 text-green-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
  pending: 'bg-slate-100 text-slate-700',
  suspended: 'bg-slate-200 text-slate-800',
};

export function Badge({ variant, children }: BadgeProps) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${styles[variant]}`}>{children}</span>;
}
