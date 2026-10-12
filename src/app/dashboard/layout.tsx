import type { Metadata } from 'next';
// import './globals.css';

export const metadata: Metadata = {
  title: 'Clinic Management System',
  description: 'Owner Portal & Exceptions Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}