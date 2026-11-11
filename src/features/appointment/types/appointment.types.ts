export type AppointmentStatus =
  | "scheduled"
  | "checked"
  | "consult"
  | "completed"
  | "cancelled";

export interface Appointment {
  id: string;
  time: string; // "10:00"
  patientId: string;
  patientName: string;
  patientNationalId: string;
  doctorId: string;
  status: AppointmentStatus;
  startedAt: string | null; // ISO من السيرفر
}