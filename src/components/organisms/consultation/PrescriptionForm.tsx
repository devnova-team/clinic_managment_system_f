import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { useT } from "@/lib/i18n/useT";
import type { Medication } from "@/features/consultation/types/consultation.types";

const ROW = "grid grid-cols-[2fr_2fr_110px_48px] items-center gap-3 max-[640px]:grid-cols-2";

export default function PrescriptionForm({
  medications,
  onChange,
  onAdd,
  onRemove,
}: {
  medications: Medication[];
  onChange: (id: string, patch: Partial<Medication>) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}) {
  const t = useT();
  return (
    <Card>
      <h2>{t("prescription")}</h2>
      {medications.length === 0 && <p className="py-4 text-muted">{t("noMeds")}</p>}
      {medications.map((m) => (
        <div key={m.id} className={`${ROW} border-b border-line py-2`}>
          <Input
            value={m.name}
            placeholder={t("medPh")}
            aria-label={t("medication")}
            onChange={(e) => onChange(m.id, { name: e.target.value })}
          />
          <Input
            value={m.dose}
            placeholder={t("dosePh")}
            aria-label={t("dose")}
            onChange={(e) => onChange(m.id, { dose: e.target.value })}
          />
          <Input
            inputMode="numeric"
            value={m.quantity}
            aria-label={t("qty")}
            onChange={(e) => onChange(m.id, { quantity: e.target.value })}
          />
          <Button variant="white" size="sm" aria-label={t("delMed")} onClick={() => onRemove(m.id)}>
            ✕
          </Button>
        </div>
      ))}
      <Button variant="outline1" fullWidth className="mt-3.5" onClick={onAdd}>
        + {t("addMed")}
      </Button>
    </Card>
  );
}