"use client";

import React from "react";
import { useT } from "@/lib/i18n/useT";
import DoctorPerformanceRow from "../molecules/DoctorPerformanceRow";
import { DOCTORS_PERFORMANCE } from "../../data/ownerData";

export const DoctorPerformanceCard: React.FC = () => {
  const t = useT();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          {t("doc_perf_title")}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {t("doc_perf_sub")}
        </p>
      </div>

      {/* Doctors List */}
      <div className="flex flex-col gap-6">
        {DOCTORS_PERFORMANCE.map((doctor) => (
          <DoctorPerformanceRow key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorPerformanceCard;