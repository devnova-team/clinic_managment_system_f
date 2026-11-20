"use client";

import React from "react";
import AppointmentStatCard from "../molecules/AppointmentStatCard";
import { QUEUE_STATS_DATA } from "@/features/owner/data/ownerData";
import { StatItem } from "@/features/owner/types/owner.types";

interface AppointmentStatisticsProps {
  stats?: StatItem[];
}

export const AppointmentStatistics: React.FC<AppointmentStatisticsProps> = ({
  stats = QUEUE_STATS_DATA,
}) => {
  // أول 4 حالات: Scheduled, Checked-In, In Consultation, Completed
  const mainStats = stats.slice(0, 4);

  // الحالة الخامسة: Cancelled (تعرض بكامل العرض)
  const cancelledStat = stats[4] ?? {
    label: "Cancelled",
    value: 0,
    descriptionKey: "stat_desc_cancelled",
  };

  return (
    <section className="flex w-full flex-col gap-[14px]">
      {/* 1. Main 4 Cards Grid */}
      <div className="grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
        {mainStats.map((stat) => (
          <AppointmentStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            description={stat.descriptionKey ?? (stat as { description?: string }).description ?? ""}
          />
        ))}
      </div>

      {/* 2. Full-Width Cancelled Card */}
      <AppointmentStatCard
        label={cancelledStat.label}
        value={cancelledStat.value}
        description={
          cancelledStat.descriptionKey ??
          (cancelledStat as { description?: string }).description ??
          ""
        }
        fullWidth
      />
    </section>
  );
};

export default AppointmentStatistics;