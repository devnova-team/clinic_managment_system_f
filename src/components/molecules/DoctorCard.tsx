
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { LineIcon } from "@/components/atoms/LineIcon";

export type DoctorCardData = {
  name: string;
  specialty: string;
  description: string;
  days: string[];
  tone: "blue" | "green" | "purple";
  image: StaticImageData;
};

export function DoctorCard({ doctor }: { doctor: DoctorCardData }) {
  const specialtyColor = {
    blue: "text-sky-700 bg-sky-50",
    green: "text-emerald-700 bg-emerald-50",
    purple: "text-violet-700 bg-violet-50",
  }[doctor.tone];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--clinic-border)]/80 bg-[var(--clinic-surface)] p-4 shadow-[0_4px_14px_rgba(15,23,42,0.06)]">
      <div className="flex items-start gap-3">
        <div className="relative h-[100px] w-[92px] shrink-0 overflow-hidden rounded-xl bg-sky-50">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="92px"
            className="object-cover object-center"
          />
        </div>

        <div className="min-w-0 pt-1">
          <h3 className="text-sm font-extrabold text-[var(--clinic-text-primary)]">
            {doctor.name}
          </h3>

          <span
            className={`mt-1.5 inline-flex rounded-full px-2 py-1 text-[10px] font-bold ${specialtyColor}`}
          >
            {doctor.specialty}
          </span>

          <p className="mt-2 text-xs leading-5 text-[var(--clinic-text-secondary)]">
            {doctor.description}
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-[var(--clinic-border)] pt-3">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
          Available appointments
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {doctor.days.map((day) => (
            <span
              key={day}
              className={`rounded-md px-2 py-1.5 text-[10px] font-bold ${specialtyColor}`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="/login"
        className="mt-4 inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-[var(--clinic-primary-hover)] px-3 text-xs font-bold text-white transition hover:bg-sky-700"
      >
        View Schedule
        <LineIcon name="arrow-right" size={13} />
      </Link>
    </article>
  );
}
