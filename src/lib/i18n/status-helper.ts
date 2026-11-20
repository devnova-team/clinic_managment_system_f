// lib/i18n/status-helpers.ts

import { StatusType } from "@/features/owner/types/owner.types";

export const STATUS_I18N_KEYS: Record<StatusType, string> = {
  Scheduled: "st_Scheduled",
  "Checked-In": "st_CheckedIn",
  "In Consultation": "st_InConsultation",
  Completed: "st_Completed",
  Cancelled: "st_Cancelled",
};