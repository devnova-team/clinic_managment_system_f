import type { Appointment } from "../types/appointment.types";

const wait = <T,>(v: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(structuredClone(v)), 150));

// بيانات وهمية مطابقة لسكرين لوحة الدكتور. تتشال لما الـ API يتوصل.
let store: Appointment[] = [
  { id: "a1", time: "09:00", patientId: "p1", patientName: "Mariam Hassan", patientNationalId: "29803150101234", doctorId: "amr", status: "completed", startedAt: null },
  { id: "a2", time: "09:30", patientId: "p2", patientName: "Youssef Adel", patientNationalId: "29707120104567", doctorId: "amr", status: "completed", startedAt: null },
  { id: "a3", time: "10:00", patientId: "p3", patientName: "Nour Ali", patientNationalId: "30001010103456", doctorId: "amr", status: "consult", startedAt: new Date(Date.now() - 12 * 60_000).toISOString() },
  { id: "a4", time: "10:30", patientId: "p4", patientName: "Salma Ibrahim", patientNationalId: "30204250105678", doctorId: "amr", status: "checked", startedAt: null },
  { id: "a5", time: "11:00", patientId: "p5", patientName: "Omar Khaled", patientNationalId: "29512200102345", doctorId: "amr", status: "scheduled", startedAt: null },
  { id: "a6", time: "11:30", patientId: "p6", patientName: "Hana Mostafa", patientNationalId: "29909090106789", doctorId: "amr", status: "cancelled", startedAt: null },
  { id: "a7", time: "12:00", patientId: "p7", patientName: "Tarek Samy", patientNationalId: "29406060107890", doctorId: "amr", status: "scheduled", startedAt: null },
  { id: "a8", time: "12:30", patientId: "p8", patientName: "Dina Farouk", patientNationalId: "30105050108901", doctorId: "amr", status: "scheduled", startedAt: null },
];

export const appointmentService = {
  listToday: (doctorId: string) =>
    wait(store.filter((a) => a.doctorId === doctorId)),

  get: (id: string, doctorId: string) => {
    const a = store.find((x) => x.id === id);
    if (!a || a.doctorId !== doctorId) return Promise.reject(new Error("NOT_FOUND"));
    return wait(a);
  },
};

// داخلي: consultation.service بيستخدمه عشان يحدّث الحالة
export function updateAppointment(
  id: string,
  patch: Partial<Pick<Appointment, "status" | "startedAt">>
) {
  store = store.map((a) => (a.id === id ? { ...a, ...patch } : a));
}