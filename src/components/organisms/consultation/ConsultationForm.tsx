import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/TextArea";
import { useT } from "@/lib/i18n/useT";

export default function ConsultationForm({
  diagnosis,
  notes,
  onDiagnosis,
  onNotes,
}: {
  diagnosis: string;
  notes: string;
  onDiagnosis: (v: string) => void;
  onNotes: (v: string) => void;
}) {
  const t = useT();
  return (
    <Card>
      <h2>{t("consultation")}</h2>
      <div className="mt-[18px] flex flex-col gap-[18px]">
        <div className="flex flex-col gap-[7px]">
          <span className="lbl">{t("diagnosis")}</span>
          <Input
            value={diagnosis}
            placeholder={t("diagPh")}
            onChange={(e) => onDiagnosis(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <span className="lbl">{t("notes")}</span>
          <Textarea
            id="consultation-notes"
            value={notes}
            placeholder={t("notesPh")}
            onChange={(e) => onNotes(e.target.value)}
          />
        </div>
      </div>
    </Card>
  );
}