"use client";

import React from "react";
import StatusBadge from "@/components/molecules/StatusBadge";
import { useT } from "@/lib/i18n/useT";
import { cn } from "@/lib/cn";
import { StatusType } from "@/features/owner/types/owner.types";

// استخراج النوع الدقيق الذي يتوقعه StatusBadge تلقائياً
type BadgeStatus = React.ComponentProps<typeof StatusBadge>["status"];

export interface AppointmentStatCardProps {
  label: StatusType;
  value: number;
  description: string;
  className?: string;
  fullWidth?: boolean;
}

const STATUS_I18N_KEYS: Record<StatusType, string> = {
  Scheduled: "st_Scheduled",
  "Checked-In": "st_CheckedIn",
  "In Consultation": "st_InConsultation",
  Completed: "st_Completed",
  Cancelled: "st_Cancelled",
};

function toAppointmentStatus(status: StatusType): BadgeStatus {
  switch (status) {
    case "Scheduled":
      return "scheduled" as BadgeStatus;
    case "Checked-In":
      return "checked" as BadgeStatus;
    case "In Consultation":
      return "consult" as BadgeStatus;
    case "Completed":
      return "completed" as BadgeStatus;
    case "Cancelled":
      return "cancelled" as BadgeStatus;
    default:
      return "scheduled" as BadgeStatus;
  }
}

export const AppointmentStatCard: React.FC<AppointmentStatCardProps> = ({
  label,
  value,
  description,
  className = "",
  fullWidth = false,
}) => {
  const t = useT();

  const localizedLabel = t(STATUS_I18N_KEYS[label] ?? label);
  const badgeStatus = toAppointmentStatus(label);

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[22px] border border-[#DFE7E6] bg-white p-5 shadow-[0_8px_20px_rgba(20,40,40,0.05)] transition-all hover:shadow-md",
        fullWidth ? "min-h-[100px]" : "h-[125px]",
        className
      )}
    >
      <StatusBadge status={badgeStatus} label={localizedLabel} />

      <div className="mt-auto flex items-end justify-between gap-3">
        <span className="text-[38px] font-bold leading-none text-[#172D2E]">
          {value}
        </span>
        <p
          className={cn(
            "mb-[2px] text-[12px] font-medium leading-tight text-[#5D777B]",
            fullWidth ? "text-start" : "max-w-[110px] text-end"
          )}
        >
          {t(description)}
        </p>
      </div>
    </div>
  );
};

export default AppointmentStatCard;