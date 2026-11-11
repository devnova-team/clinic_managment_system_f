"use client";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { useT } from "@/lib/i18n/useT";
import type { CurrentUser } from "@/features/auth/hooks/useCurrentUser";
import type { Appointment } from "@/features/appointment/types/appointment.types";

export default function DoctorHero({
  doctor,
  target,
  onOpen,
}: {
  doctor: CurrentUser;
  target: Appointment | null;
  onOpen: (id: string) => void;
}) {
  const t = useT();
  return (
    <Card dark className="flex flex-wrap items-center gap-[18px]">
      <Avatar name={doctor.name} size="lg" />
      <div className="min-w-[200px] flex-1">
        <h2 className="text-[30px] text-white">{doctor.name}</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2.5">
          <span className="rounded-pill bg-s-con-bg px-3 py-0.5 text-[13px] font-bold text-s-con-fg">
            {t(doctor.specialtyKey ?? "")}
          </span>
          <span className="opacity-85">
            {t("syndNo")} <span className="num">{doctor.syndicateNo}</span>
          </span>
        </div>
      </div>
      <Button variant="mint" disabled={!target} onClick={() => target && onOpen(target.id)}>
        {t("openCase")}
      </Button>
    </Card>
  );
}