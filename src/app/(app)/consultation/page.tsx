"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useT } from "@/lib/i18n/useT";
import { useDoctorDashboard } from "@/features/dashboard/doctor/hooks/useDoctorDashboard";
import EmptyState from "@/components/molecules/EmptyState";

export default function ConsultationIndexPage() {
  const t = useT();
  const router = useRouter();
  const { openTarget, loading } = useDoctorDashboard();

  useEffect(() => {
    if (openTarget) router.replace(`/consultation/${openTarget.id}`);
  }, [openTarget, router]);

  if (loading || openTarget) return null;

  return <EmptyState title={t("noOpen")} description={t("noOpenD")} />;
}