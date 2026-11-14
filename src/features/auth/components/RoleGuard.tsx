"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { canAccess, HOME_BY_ROLE } from "@/lib/navigation/nav-config";

export default function RoleGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { role } = useCurrentUser();
  const allowed = canAccess(role, pathname);

  useEffect(() => {
    if (!allowed) router.replace(HOME_BY_ROLE[role]);
  }, [allowed, role, router]);

  // ما نعرضش الصفحة قبل ما نتأكد إن الدور مسموح له بيها
  if (!allowed) return null;

  return <>{children}</>;
}