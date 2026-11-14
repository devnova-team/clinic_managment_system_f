"use client";

import { useRouter } from "next/navigation";
import { useT } from "@/lib/i18n/useT";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useDoctorDashboard } from "@/features/dashboard/doctor/hooks/useDoctorDashboard";
import Header from "@/components/layout/Header";
import DoctorHero from "./DoctorHero";
import DoctorKpis from "./DoctorKpis";
import DayProgress from "./DayProgress";
import TodayCasesTable from "./TodayCasesTable";

export default function DoctorDashboardView() {
  const t = useT();
  const router = useRouter();
  const doctor = useCurrentUser();
  const { appointments, summary, openTarget, loading } = useDoctorDashboard();
  const openCase = (id: string) => router.push(`/consultation/${id}`);

  return (
    <>
      <Header title={t("nav_mydash")} subtitle={t("dd_sub")} />
      <div className="flex flex-col gap-[22px]">
        <DoctorHero doctor={doctor} target={openTarget} onOpen={openCase} />
        <DoctorKpis summary={summary} />
        <DayProgress summary={summary} />
        <TodayCasesTable appointments={appointments} loading={loading} onOpen={openCase} />
      </div>
    </>
  );
}