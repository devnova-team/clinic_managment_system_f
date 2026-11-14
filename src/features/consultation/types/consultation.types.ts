export type Medication = {
  id: string;
  name: string;
  dose: string;
  quantity: string;
};

export type ConsultationDraft = {
  diagnosis: string;
  notes: string;
  medications: Medication[];
};

export type ConsultationRecord = ConsultationDraft & {
  appointmentId: string;
  startedAt: string | null;
};

export type HistoryVisit = {
  id: string;
  date: string;
  title: string;
  summary: string;
};