"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { canAccess, HOME_BY_ROLE } from "@/lib/navigation/nav-config";


const DEFAULT_FALLBACK_ROUTE = "/dashboard";


export default function RoleGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { role } = useCurrentUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const allowed = isMounted ? canAccess(role, pathname) : true;

  useEffect(() => {
    if (!isMounted) return;

     if (!allowed) {
      const destination =
        role && HOME_BY_ROLE && HOME_BY_ROLE[role]
          ? HOME_BY_ROLE[role]
          : DEFAULT_FALLBACK_ROUTE;

      router.replace(destination);
    }
  }, [allowed, role, router,isMounted]);

  // ... داخل المكون RoleGuard
console.log("DEBUG GUARD:", { 
  currentRole: role, 
  currentPath: pathname, 
  isAllowed: allowed 
});


  // ما نعرضش الصفحة قبل ما نتأكد إن الدور مسموح له بيها
  if (!isMounted || !allowed) 
    return null;

  return <>{children}</>;
}
