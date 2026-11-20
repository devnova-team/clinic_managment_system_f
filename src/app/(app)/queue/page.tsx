"use client";


import Header from "@/components/layout/Header";
import QueueHintBanner from "@/features/queue/components/molecules/QueueHintBanner";
import AppointmentStatistics from "@/features/queue/components/organisms/AppointmentStatistics";
import DailyQueueTable from "@/features/queue/components/organisms/DailyQueueTable";
import { useT } from "@/lib/i18n/useT";


export default function QueuePage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-[#F2F5F4] px-4 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-[1150px] flex-col gap-5">
      
        <Header title={t("nav_queue")} subtitle={t("q_sub")} />

        <AppointmentStatistics />
        <DailyQueueTable />

        <QueueHintBanner />
      </div>
    </main>
  );
}
