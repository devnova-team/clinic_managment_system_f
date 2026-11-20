"use client";

import React from "react";
import QueueTitleBar from "../molecules/QueueTitleBar";
import { QueueRow } from "./QueueRow";

import { useT } from "@/lib/i18n/useT";
import { Appointment } from "@/features/owner/types/owner.types";
import { APPOINTMENTS } from "../../data/queueData";

interface DailyQueueTableProps {
  appointments?: Appointment[];
}

export const DailyQueueTable: React.FC<DailyQueueTableProps> = ({
  appointments = APPOINTMENTS,
}) => {
  const t = useT();

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-start shadow-sm">
      {/* Header */}
      <QueueTitleBar count={appointments.length} />

      {/* Table Headers */}
      <div className="grid grid-cols-[70px_200px_150px_140px_120px_1fr] items-center gap-4 border-b border-gray-100 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-500">
        <div>{t("col_time")}</div>
        <div>{t("col_patient")}</div>
        <div>{t("col_doctor")}</div>
        <div>{t("col_status")}</div>
        <div>{t("col_progress")}</div>
        <div className="text-end">{t("col_actions")}</div>
      </div>

      {/* Table Rows */}
      <div className="flex flex-col divide-y divide-gray-100 bg-white">
        {appointments.map((apt) => (
          <QueueRow key={apt.id} data={apt} />
        ))}
      </div>
    </div>
  );
};

export default DailyQueueTable;