import StatCard from "@/components/molecules/StatCard";
import { useT } from "@/lib/i18n/useT";
import type { DoctorSummary } from "@/features/dashboard/doctor/types/dashboard.types";

export default function DoctorKpis({ summary }: { summary: DoctorSummary }) {
  const t = useT();
  const of = `${t("ofN")} ${summary.total}`;
  return (
    <>
      <div className="grid grid-cols-3 gap-4 max-[640px]:grid-cols-1">
        <StatCard label={t("casesToday")} value={summary.total} sub={`${summary.total} ${t("cases")}`} tone="ink" />
        <StatCard label={t("entered")} value={summary.entered} sub={of} tone="ok" />
        <StatCard label={t("remaining")} value={summary.remaining} sub={of} tone="warn" />
      </div>
      <StatCard label={t("cancelledL")} value={summary.cancelled} sub={of} tone="bad" />
    </>
  );
}