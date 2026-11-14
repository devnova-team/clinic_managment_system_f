import DateChip from "@/components/molecules/DateChip";
import LanguageSwitch from "@/components/molecules/LanguageSwitch";

type Props = {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
};

export default function Header({ title, subtitle, actions }: Props) {
  return (
    <header className="flex flex-wrap items-start justify-between gap-4">
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <p className="mt-2 text-[15px] text-muted">{subtitle}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        {actions}
        <LanguageSwitch />
        <DateChip />
      </div>
    </header>
  );
}