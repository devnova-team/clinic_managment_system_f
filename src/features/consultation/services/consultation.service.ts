import { appointmentService, updateAppointment } from "@/features/appointment/services/appointment.service";
import type { Appointment } from "@/features/appointment/types/appointment.types";
import type { ConsultationDraft, ConsultationRecord, HistoryVisit } from "../types/consultation.types";

const wait = <T,>(v: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(structuredClone(v)), 150));

// الكشوفات محفوظة هنا بالـ appointmentId. في الـ API دي جداول في الـ DB.
const records = new Map<string, ConsultationRecord>();

const history: Record<string, HistoryVisit[]> = {
  p3: [
    { id: "v1", date: "2026-09-02", title: "Follow-up", summary: "Blood pressure stable. Continue current treatment." },
    { id: "v2", date: "2026-07-18", title: "First consultation", summary: "Seasonal allergy. Prescribed an antihistamine." },
  ],
};

function saveDraft(appointmentId: string, draft: ConsultationDraft): ConsultationRecord {
  const prev = records.get(appointmentId);
  if (!prev) throw new Error("NOT_OPEN");
  const next = { ...prev, ...draft };
  records.set(appointmentId, next);
  return next;
}

export const consultationService = {
  // بيفتح الكشف. لو الحالة checked بيحوّلها consult ويسجل startedAt من السيرفر.
  async open(appointmentId: string, doctorId: string) {
    let appt: Appointment = await appointmentService.get(appointmentId, doctorId);

    if (appt.status === "checked") {
      const startedAt = new Date().toISOString();
      updateAppointment(appt.id, { status: "consult", startedAt });
      appt = { ...appt, status: "consult", startedAt };
    }

    if (appt.status !== "consult") throw new Error("NOT_OPEN");

    if (!records.has(appt.id)) {
      records.set(appt.id, {
        appointmentId: appt.id,
        diagnosis: "",
        notes: "",
        medications: [],
        startedAt: appt.startedAt,
      });
    }

    return wait({
      appointment: appt,
      consultation: records.get(appt.id)!,
      history: history[appt.patientId] ?? [],
    });
  },

  async save(appointmentId: string, doctorId: string, draft: ConsultationDraft) {
    await appointmentService.get(appointmentId, doctorId);
    return wait(saveDraft(appointmentId, draft));
  },

  async complete(appointmentId: string, doctorId: string, draft: ConsultationDraft) {
    await appointmentService.get(appointmentId, doctorId);
    saveDraft(appointmentId, draft);
    updateAppointment(appointmentId, { status: "completed" });
    return wait(true);
  },
};