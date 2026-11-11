"use client";

import { useEffect, useMemo, useState } from "react";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { appointmentService } from "@/features/appointment/services/appointment.service";
import type { Appointment } from "@/features/appointment/types/appointment.types";
import type { DoctorSummary } from "../types/dashboard.types";

export function useDoctorDashboard() {
  const { id: doctorId } = useCurrentUser();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    appointmentService
      .listToday(doctorId)
      .then((data) => {
        if (alive) setAppointments(data);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [doctorId]);

  const summary = useMemo<DoctorSummary>(() => {
    const count = (...s: Appointment["status"][]) =>
      appointments.filter((a) => s.includes(a.status)).length;
    return {
      total: appointments.length,
      entered: count("completed", "consult"),
      remaining: count("scheduled", "checked"),
      cancelled: count("cancelled"),
    };
  }, [appointments]);

  const openTarget = useMemo(
    () =>
      appointments.find((a) => a.status === "consult") ??
      appointments.find((a) => a.status === "checked") ??
      null,
    [appointments]
  );

  return { appointments, summary, openTarget, loading };
}