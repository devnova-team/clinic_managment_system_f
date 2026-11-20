"use client";

import { TimeRangeFilter } from "@/features/owner/components/molecules/TimeRangeFilter";
import { RevenueChartCard } from "@/features/owner/components/organisms/RevenueChartCard";
import DashboardCards from "@/features/owner/components/organisms/DashboardStatistics";
import { AttendanceCard } from "@/features/owner/components/organisms/AttendanceCard";
import { DoctorPerformanceCard } from "@/features/owner/components/organisms/DoctorPerformanceCard";
import {
  REVENUE_CHART_DATA,
  STATISTICS_CARDS_DATA,
  HIGHLIGHTED_DAY_INFO,
} from "@/features/owner/data/ownerData";
import { useT } from "@/lib/i18n/useT";
import Header from "@/components/layout/Header";

export default function DashboardPage() {
  const t = useT();

  const handleRangeChange = (range: string) => {
    console.log("Selected range:", range);
  };

  return (
    <>
      <main className="min-h-screen bg-[#F2F5F4] p-6 md:p-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
          {/* 1. Header with Filter */}

          <Header title={"Owner " + t("nav_dash")} subtitle={t("do_sub")} />
          <TimeRangeFilter onChange={handleRangeChange} />

          {/* 2. Top Statistics Cards */}
          <DashboardCards cards={STATISTICS_CARDS_DATA} />

          {/* 3. Revenue Bar Chart */}
          <RevenueChartCard
            data={REVENUE_CHART_DATA}
            highlightInfo={HIGHLIGHTED_DAY_INFO}
          />

          {/* 4. Bottom Grid: Attendance & Doctor Performance */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <AttendanceCard />
            <DoctorPerformanceCard />
          </div>
        </div>
      </main>
    </>
  );
}
