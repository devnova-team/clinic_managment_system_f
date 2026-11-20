"use client";

import React from "react";
import { useT } from "@/lib/i18n/useT";
import { StatusType } from "@/features/owner/types/owner.types";

export type AnyStatus =
  | StatusType
  | "scheduled"
  | "checked-in"
  | "checked"
  | "in-consultation"
  | "completed"
  | "cancelled";

interface StatusBadgeProps {
  status: AnyStatus;
  label?: string;
  className?: string;
}

const STATUS_CONFIG: Record<
  string,
  { text: string; bg: string; dot: string; key: string }
> = {
  Scheduled: { text: "#1D4ED8", bg: "#E0E7FF", dot: "#1D4ED8", key: "st_Scheduled" },
  scheduled: { text: "#1D4ED8", bg: "#E0E7FF", dot: "#1D4ED8", key: "st_Scheduled" },

  "Checked-In": { text: "#B85200", bg: "#FEF3C7", dot: "#B85200", key: "st_CheckedIn" },
  "checked-in": { text: "#B85200", bg: "#FEF3C7", dot: "#B85200", key: "st_CheckedIn" },
  checked: { text: "#B85200", bg: "#FEF3C7", dot: "#B85200", key: "st_CheckedIn" },

  "In Consultation": { text: "#0D9488", bg: "#CCFBF1", dot: "#0D9488", key: "st_InConsultation" },
  "in-consultation": { text: "#0D9488", bg: "#CCFBF1", dot: "#0D9488", key: "st_InConsultation" },

  Completed: { text: "#2D6A4F", bg: "#E8F5E9", dot: "#2D6A4F", key: "st_Completed" },
  completed: { text: "#2D6A4F", bg: "#E8F5E9", dot: "#2D6A4F", key: "st_Completed" },

  Cancelled: { text: "#B91C1C", bg: "#FEE2E2", dot: "#B91C1C", key: "st_Cancelled" },
  cancelled: { text: "#B91C1C", bg: "#FEE2E2", dot: "#B91C1C", key: "st_Cancelled" },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  className = "",
}) => {
  const t = useT();
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.Scheduled;

  // إذا تم تمرير label جاهز نستخدمه، وإلا نترجم المفتاح تلقائياً
  const displayLabel = label ?? t(config.key);

  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold leading-none whitespace-nowrap ${className}`}
      style={{ color: config.text, backgroundColor: config.bg }}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: config.dot }}
      />
      {displayLabel}
    </span>
  );
};

export default StatusBadge;