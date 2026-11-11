"use client";

import Avatar from "@/components/atoms/Avatar";
import Card from "@/components/atoms/Card";
import StatusBadge from "@/components/molecules/StatusBadge";
import { useT } from "@/lib/i18n/useT";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useElapsedTimer } from "@/features/consultation/hooks/useElapsedTimer";
import type { Appointment } from "@/features/appointment/types/appointment.types";

export default function PatientHeader({
  appointment,
  startedAt,
}: {
  appointment: Appointment;
  startedAt: string | null;
}) {
  const t = useT();
  const doctor = useCurrentUser();
  const elapsed = useElapsedTimer(startedAt);

  return (
    <Card dark className="flex flex-wrap items-center gap-4">
      <Avatar name={appointment.patientName} size="lg" />
      <div className="min-w-[200px] flex-1">
        <span className="eyebrow !text-rail-muted">{t("patient")}</span>
        <h2 className="text-[32px] text-white">{appointment.patientName}</h2>
        <div className="mt-1.5 flex flex-wrap items-center gap-2.5 opacity-90">
          <span>
            {t("apptLbl")}: <span className="num">{appointment.time}</span>
          </span>
          <span>· {doctor.name}</span>
          <StatusBadge status="consult" label={t("st_consult")} />
        </div>
      </div>
      <div className="rounded-control bg-rail-soft px-4 py-2 text-center">
        <small className="block text-[11px] font-bold uppercase tracking-[.1em] text-rail-muted">
          {t("inRoom")}
        </small>
        <b className="num font-display text-2xl">{elapsed}</b>
      </div>
    </Card>
  );
}