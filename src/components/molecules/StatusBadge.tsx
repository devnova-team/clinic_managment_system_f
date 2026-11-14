import Badge from "@/components/atoms/Badge";
import type { AppointmentStatus } from "@/features/appointment/types/appointment.types";

const VARIANT: Record<AppointmentStatus, "sch" | "chk" | "con" | "cmp" | "can"> = {
  scheduled: "sch",
  checked: "chk",
  consult: "con",
  completed: "cmp",
  cancelled: "can",
};

export default function StatusBadge({ status, label }: { status: AppointmentStatus; label: string }) {
  return (
    <Badge variant={VARIANT[status]} dot>
      {label}
    </Badge>
  );
}