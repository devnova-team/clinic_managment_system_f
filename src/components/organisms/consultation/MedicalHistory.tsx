import Card from "@/components/atoms/Card";
import { useT } from "@/lib/i18n/useT";
import type { HistoryVisit } from "@/features/consultation/types/consultation.types";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export default function MedicalHistory({ visits }: { visits: HistoryVisit[] }) {
  const t = useT();
  return (
    <Card>
      <h2>{t("medHistory")}</h2>
      {visits.length === 0 ? (
        <p className="mt-4 text-muted">—</p>
      ) : (
        <ol className="mt-5 flex flex-col gap-5">
          {visits.map((v) => (
            <li key={v.id} className="flex gap-3.5">
              <span className="mt-0.5 size-[18px] shrink-0 rounded-full border-[2.5px] border-brand bg-surface" />
              <div>
                <div className="text-xs font-bold uppercase tracking-[.08em] text-brand">
                  {formatDate(v.date)}
                </div>
                <b className="block text-base">{v.title}</b>
                <p className="text-muted">{v.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Card>
  );
}