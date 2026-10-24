import { LineIcon, type LineIconName } from "@/components/atoms/LineIcon";

export function BenefitItem({ icon, title, description, tone = "blue" }: {
  icon: LineIconName;
  title: string;
  description: string;
  tone?: "blue" | "green" | "purple";
}) {
  const tones = {
    blue: "bg-sky-100 text-sky-600",
    green: "bg-emerald-100 text-emerald-700",
    purple: "bg-violet-100 text-violet-600",
  };
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full ${tones[tone]}`}>
        <LineIcon name={icon} size={17} />
      </span>
      <div>
        <h3 className="text-sm font-bold text-[var(--clinic-text-primary)]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-[var(--clinic-text-secondary)]">{description}</p>
      </div>
    </div>
  );
}
