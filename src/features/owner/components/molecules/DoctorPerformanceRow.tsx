"use client";

import React from "react";
import ProgressBar from "@/components/atoms/ProgressBar";
import { useT } from "@/lib/i18n/useT";
import { DoctorPerformance } from "../../types/owner.types";

interface DoctorPerformanceRowProps {
  doctor: DoctorPerformance;
}

export const DoctorPerformanceRow: React.FC<DoctorPerformanceRowProps> = ({
  doctor,
}) => {
  const t = useT();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        {/* Doctor Info */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-gray-900">
            {doctor.name}
          </p>
          <p className="truncate text-xs text-gray-500">{doctor.specialty}</p>
        </div>

        {/* Stats */}
        <div className="flex shrink-0 flex-col items-end text-right">
          <p className="text-sm font-semibold text-gray-900">
            {doctor.patients} {t("patients")}
          </p>
          <p className="text-xs text-gray-500">
            {doctor.avgTime} <span className="mx-0.5 text-gray-300">·</span>{" "}
            {doctor.revenue}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        value={doctor.progress}
        activeColor="#118D80"
        className="h-2"
      />
    </div>
  );
};

export default DoctorPerformanceRow;
