"use client";

import React from "react";
import ActionButton from "../atoms/ActionButton";
import Button from "@/components/atoms/Button";
import { useT } from "@/lib/i18n/useT";

interface NextActionGroupProps {
  status: string;
  currentAction?: string;
  onCheckIn?: () => void;
  onCancel?: () => void;
  onStartConsultation?: () => void;
  onGoToBilling?: () => void;
}

export const NextActionGroup: React.FC<NextActionGroupProps> = ({
  status,
  currentAction,
  onCheckIn,
  onCancel,
  onStartConsultation,
  onGoToBilling,
}) => {
  const t = useT();

  // في حالة اكتمال الزيارة أو كون المريض في الكشف
  if (status === "Completed" || status === "In Consultation") {
    return (
      <span className="px-2 text-[13px] font-medium text-gray-400">
        {t("view_only")}
      </span>
    );
  }

  return (
    <div className="flex flex-col items-end gap-2.5">
      {/* 1. Segmented Control Pill */}
      <div className="flex items-center rounded-full bg-[#F3F4F6] p-1">
        <ActionButton
          label={t("st_Scheduled")}
          variant={currentAction === "Scheduled" ? "secondary" : "ghost"}
        />
        <ActionButton
          label={t("act_checkin")}
          variant={currentAction === "Check-in" ? "primary" : "ghost"}
          onClick={onCheckIn}
        />
        <ActionButton
          label={t("act_cancel")}
          variant={currentAction === "Cancel" ? "danger" : "ghost"}
          onClick={onCancel}
        />
      </div>

      {/* 2. Secondary Action: Start Consultation (Solid Green) */}
      {status === "Checked-In" && (
        <Button
          variant="primary"
          size="sm"
          isRounded
          onClick={onStartConsultation}
          className="!flex !items-center !gap-1.5 !px-4 !py-1.5 !text-[12px] !font-semibold !bg-[#115E59] text-white whitespace-nowrap shadow-sm hover:!bg-[#0e4b47]"
        >
          <span>{t("act_start")}</span>
          <span className="inline-block rtl:rotate-180">→</span>
        </Button>
      )}

      {/* 3. Secondary Action: Refund (Outline Red) */}
      {status === "Cancelled" && (
        <Button
          variant="outline2"
          size="sm"
          isRounded
          onClick={onGoToBilling}
          className="!flex !items-center !gap-1.5 !px-4 !py-1.5 !text-[12px] !font-semibold !border-[#991B1B] !text-[#991B1B] whitespace-nowrap hover:!bg-red-50"
        >
          <span>{t("act_refund")}</span>
          <span className="inline-block rtl:rotate-180">→</span>
        </Button>
      )}
    </div>
  );
};

export default NextActionGroup;