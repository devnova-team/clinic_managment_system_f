import type { ReactNode } from "react";
import Card from "@/components/atoms/Card";
import { cn } from "@/lib/cn";

type Tone = "ink" | "ok" | "warn" | "bad" | "brand";

const dotTone: Record<Tone, string> = {
  ink: "bg-ink",
  ok: "bg-ok",
  warn: "bg-warn",
  bad: "bg-bad",
  brand: "bg-brand",
};

interface StatCardProps {
  label: string;
  value: ReactNode;
  sub?: string;
  tone?: Tone;
  dark?: boolean;
}

export default function StatCard({ label, value, sub, tone, dark = false }: StatCardProps) {
  return (
    <Card dark={dark} className="flex flex-col gap-3">
      <span className={cn("eyebrow flex items-center gap-2", dark && "!text-rail-kpi")}>
        {tone && <i className={cn("inline-block size-3 rounded", dotTone[tone])} />}
        {label}
      </span>
      <b className="num font-display text-[clamp(30px,3.6vw,44px)] leading-none font-extrabold">
        {value}
      </b>
      {sub && <span className={dark ? "opacity-80" : "text-muted"}>{sub}</span>}
    </Card>
  );
}