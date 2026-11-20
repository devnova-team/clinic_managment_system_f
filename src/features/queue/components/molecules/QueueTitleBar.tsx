"use client";

import React from "react";
import { useT } from "@/lib/i18n/useT";

interface QueueTitleBarProps {
  count: number;
}

export const QueueTitleBar: React.FC<QueueTitleBarProps> = ({ count }) => {
  const t = useT();

  return (
    <div className="flex items-center justify-between border-b border-gray-100 p-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {t("daily_queue")}
      </h2>
      <span className="text-sm font-medium text-gray-500">
        {count} {t("appointments_label")}
      </span>
    </div>
  );
};

export default QueueTitleBar;