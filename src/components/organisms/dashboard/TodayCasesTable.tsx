"use client";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import DataTable from "@/components/molecules/DataTable";
import EmptyState from "@/components/molecules/EmptyState";
import StatusBadge from "@/components/molecules/StatusBadge";
import { useT } from "@/lib/i18n/useT";
import type { Appointment, AppointmentStatus } from "@/features/appointment/types/appointment.types";

const LABEL_KEY: Record<AppointmentStatus, string> = {
  completed: "entered",
  consult: "st_consult",
  checked: "waiting",
  cancelled: "st_cancelled",
  scheduled: "remaining",
};

export default function TodayCasesTable({
  appointments,
  loading,
  onOpen,
}: {
  appointments: Appointment[];
  loading: boolean;
  onOpen: (id: string) => void;
}) {
  const t = useT();

  if (!loading && appointments.length === 0) {
    return <EmptyState title={t("noCases")} />;
  }

  return (
    <DataTable
      loading={loading}
      rows={appointments}
      getRowKey={(a) => a.id}
      columns={[
        { key: "time", header: t("colTime"), cell: (a) => <span className="num font-semibold">{a.time}</span> },
        {
          key: "name",
          header: t("colName"),
          cell: (a) => (
            <div className="flex items-center gap-3">
              <Avatar name={a.patientName} />
              <b className="font-semibold">{a.patientName}</b>
            </div>
          ),
        },
        {
          key: "status",
          header: t("colStatus"),
          cell: (a) => <StatusBadge status={a.status} label={t(LABEL_KEY[a.status])} />,
        },
        {
          key: "action",
          header: "",
          align: "end",
          cell: (a) =>
            a.status === "consult" || a.status === "checked" ? (
              <Button size="sm" onClick={() => onOpen(a.id)}>
                {t("openCase")}
              </Button>
            ) : null,
        },
      ]}
    />
  );
}