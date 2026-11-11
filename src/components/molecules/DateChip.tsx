"use client";

import Icon from "@/components/atoms/Icon";
import { useT } from "@/lib/i18n/useT";
import { CalendarIcon } from "@/assets/icons/icons";

// التاريخ الحالي بيتحسب وقت الـ render. لو الصفحة مفتوحة لفترة طويلة، التاريخ مش بيتحدّث لحد الـ reload، وده مقبول للتصميم.
export default function DateChip() {
  const t = useT();
  const lang = typeof document !== "undefined" && document.documentElement.lang === "ar" ? "ar-u-nu-latn" : "en-GB";

  const formatted = new Date().toLocaleDateString(lang, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <span className="inline-flex items-center gap-2.5 rounded-pill border border-line bg-surface px-[18px] py-2.5 font-semibold">
      <Icon IconComponent={CalendarIcon} size={18} className="text-brand" />
      <span className="num">{formatted}</span>
    </span>
  );
}