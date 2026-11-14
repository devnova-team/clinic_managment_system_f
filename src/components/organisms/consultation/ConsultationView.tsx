"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import EmptyState from "@/components/molecules/EmptyState";
import { useT } from "@/lib/i18n/useT";
import { useConsultation } from "@/features/consultation/hooks/useConsultation";
import Header from "@/components/layout/Header";
import PatientHeader from "./PatientHeader";
import MedicalHistory from "./MedicalHistory";
import ConsultationForm from "./ConsultationForm";
import PrescriptionForm from "./PrescriptionForm";
import ConsultationActions from "./ConsultationActions";

export default function ConsultationView({
  appointmentId,
}: {
  appointmentId: string;
}) {
  const t = useT();
  const router = useRouter();
  const c = useConsultation(appointmentId);
  const [saved, setSaved] = useState(false);

  if (c.error) {
    return (
      <EmptyState
        title={t("noOpen")}
        description={t("noOpenD")}
        action={
          <Button onClick={() => router.push("/dashboard")}>
            {t("nav_mydash")}
          </Button>
        }
      />
    );
  }

  if (!c.state || !c.draft) return <p className="text-muted">…</p>;

  const handleSave = async () => {
    await c.save();
    setSaved(true);
  };

  return (
    <div className="flex flex-col gap-[22px]">
      <Header title={t("c_title")} subtitle={t("c_sub")} />
      <PatientHeader
        appointment={c.state.appointment}
        startedAt={c.startedAt}
      />
      <div className="grid grid-cols-2 gap-[22px] max-[1100px]:grid-cols-1">
        <MedicalHistory visits={c.state.history} />
        <ConsultationForm
          diagnosis={c.draft.diagnosis}
          notes={c.draft.notes}
          onDiagnosis={(v) => c.update("diagnosis", v)}
          onNotes={(v) => c.update("notes", v)}
        />
      </div>
      <PrescriptionForm
        medications={c.draft.medications}
        onChange={c.setMed}
        onAdd={c.addMed}
        onRemove={c.removeMed}
      />
      <ConsultationActions
        busy={c.busy}
        saved={saved}
        onSave={handleSave}
        onComplete={c.complete}
      />
    </div>
  );
}
