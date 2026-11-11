import DashboardLayout from '@/components/layout/DashboardLayout';
import RoleGuard from '@/features/auth/components/RoleGuard';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </RoleGuard>
  );
}