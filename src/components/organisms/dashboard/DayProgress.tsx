import Card from "@/components/atoms/Card";
import ProgressBar from "@/components/molecules/ProgressBar";
import { useT } from "@/lib/i18n/useT";
import type { DoctorSummary } from "@/features/dashboard/doctor/types/dashboard.types";

export default function DayProgress({ summary }: { summary: DoctorSummary }) {
  const t = useT();
  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2.5">
        <h2>{t("dayProgress")}</h2>
        <span className="text-muted">
          {t("entered")} {summary.entered} · {t("remaining")} {summary.remaining} · {t("cancelledL")}{" "}
          {summary.cancelled}
        </span>
      </div>
      <ProgressBar
        segments={[
          { value: summary.entered, tone: "ok" },
          { value: summary.remaining, tone: "warn" },
          { value: summary.cancelled, tone: "bad" },
        ]}
      />
    </Card>
  );
}