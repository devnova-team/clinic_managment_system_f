"use client";

import React from "react";

import { useT } from "@/lib/i18n/useT";
import { ATTENDANCE_META, ATTENDANCE_SEGMENTS } from "../../data/ownerData";
import StackedProgressBar from "../molecules/StackedProgressBar";

export const AttendanceCard: React.FC = () => {
  const t = useT();

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div>
        {/* 1. Card Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {t("att_title")}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {ATTENDANCE_META.totalVisits} {t("booked_visits")} · {t(ATTENDANCE_META.periodKey)}
          </p>
        </div>

        {/* 2. Stacked Progress Bar */}
        <StackedProgressBar segments={ATTENDANCE_SEGMENTS} />
      </div>

      {/* 3. Details List (Legend) */}
      <div className="mt-6 flex flex-col gap-3">
        {ATTENDANCE_SEGMENTS.map((segment) => (
          <div key={segment.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 shrink-0 rounded-sm"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-sm font-medium text-gray-600">
                {t(segment.labelKey)}
              </span>
            </div>

            <div className="text-sm font-bold text-gray-900">
              {segment.value}{" "}
              <span className="mx-0.5 font-medium text-gray-400">·</span>{" "}
              {segment.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceCard;