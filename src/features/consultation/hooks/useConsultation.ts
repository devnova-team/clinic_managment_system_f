"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import type { Appointment } from "@/features/appointment/types/appointment.types";
import { consultationService } from "../services/consultation.service";
import type {
  ConsultationDraft,
  ConsultationRecord,
  HistoryVisit,
  Medication,
} from "../types/consultation.types";

type State = {
  appointment: Appointment;
  consultation: ConsultationRecord;
  history: HistoryVisit[];
};

export function useConsultation(appointmentId: string) {
  const router = useRouter();
  const { id: doctorId } = useCurrentUser();

  const [state, setState] = useState<State | null>(null);
  const [draft, setDraft] = useState<ConsultationDraft | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    consultationService
      .open(appointmentId, doctorId)
      .then((data) => {
        if (!alive) return;
        setState(data);
        setDraft({
          diagnosis: data.consultation.diagnosis,
          notes: data.consultation.notes,
          medications: data.consultation.medications,
        });
      })
      .catch((e: Error) => {
        if (alive) setError(e.message);
      });
    return () => {
      alive = false;
    };
  }, [appointmentId, doctorId]);

  const update = (key: "diagnosis" | "notes", value: string) =>
    setDraft((d) => (d ? { ...d, [key]: value } : d));

  const setMed = (id: string, patch: Partial<Medication>) =>
    setDraft((d) =>
      d
        ? { ...d, medications: d.medications.map((m) => (m.id === id ? { ...m, ...patch } : m)) }
        : d
    );

  const addMed = () =>
    setDraft((d) =>
      d
        ? {
            ...d,
            medications: [
              ...d.medications,
              { id: crypto.randomUUID(), name: "", dose: "", quantity: "" },
            ],
          }
        : d
    );

  const removeMed = (id: string) =>
    setDraft((d) => (d ? { ...d, medications: d.medications.filter((m) => m.id !== id) } : d));

  const save = async () => {
    if (!draft) return;
    setBusy(true);
    try {
      await consultationService.save(appointmentId, doctorId, draft);
    } finally {
      setBusy(false);
    }
  };

  const complete = async () => {
    if (!draft) return;
    setBusy(true);
    try {
      await consultationService.complete(appointmentId, doctorId, draft);
      router.replace("/dashboard");
    } finally {
      setBusy(false);
    }
  };

  return {
    state,
    draft,
    error,
    busy,
    startedAt: state?.consultation.startedAt ?? null,
    update,
    setMed,
    addMed,
    removeMed,
    save,
    complete,
  };
}