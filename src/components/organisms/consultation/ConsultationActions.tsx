import Button from "@/components/atoms/Button";
import { useT } from "@/lib/i18n/useT";

export default function ConsultationActions({
  busy,
  saved,
  onSave,
  onComplete,
}: {
  busy: boolean;
  saved: boolean;
  onSave: () => void;
  onComplete: () => void;
}) {
  const t = useT();
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="white" disabled={busy} onClick={onSave}>
        {t("savePx")}
      </Button>
      <Button disabled={busy} onClick={onComplete}>
        ✓ {t("complete")}
      </Button>
      {saved && <span className="text-muted">{t("savedToast")}</span>}
    </div>
  );
}