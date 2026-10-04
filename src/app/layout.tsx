import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clinic Management System',
  description: 'Clinic Management System frontend',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
