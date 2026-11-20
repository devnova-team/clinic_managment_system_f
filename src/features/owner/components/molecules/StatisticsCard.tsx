"use client";

import React from "react";
import Icon from "@/components/atoms/Icon";
import { TrendingUp, UserCheck, Stethoscope } from "@/assets/icons/icons";
import { useT } from "@/lib/i18n/useT";
import { CardIconType, CardVariant } from "../../types/owner.types";

interface CardProps {
  title: string;
  value: string;
  subtext: string;
  iconType: CardIconType;
  variant: CardVariant;
}

const ICONS_MAP = {
  revenue: TrendingUp,
  attendance: UserCheck,
  doctors: Stethoscope,
};

const VARIANT_STYLES = {
  dark: {
    card: "bg-[#122b2b] border-transparent",
    title: "text-[#50b299]",
    value: "text-white",
    subtext: "text-gray-300",
    iconCustomClass: "text-[#50b299]",
  },
  light: {
    card: "bg-white border-gray-200",
    title: "text-gray-400",
    value: "text-[#122b2b]",
    subtext: "text-gray-500",
    iconCustomClass: "text-[#50b299]",
  },
};

export const StatisticsCard: React.FC<CardProps> = ({
  title,
  value,
  subtext,
  iconType,
  variant,
}) => {
  const t = useT();
  const styles = VARIANT_STYLES[variant];
  const SelectedIcon = ICONS_MAP[iconType];

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:shadow-md ${styles.card}`}
    >
      {/* Header & Icon */}
      <div className="flex items-start justify-between">
        <h3
          className={`text-[11px] font-bold uppercase tracking-[0.15em] ${styles.title}`}
        >
          {t(title)}
        </h3>

        {/* Icon */}
        <Icon
          IconComponent={SelectedIcon}
          size={20}
          className={styles.iconCustomClass}
        />
      </div>

      {/* Value & Subtext */}
      <div className="mt-5">
        <p
          className={`text-[32px] font-bold leading-none tracking-tight ${styles.value}`}
        >
          {value}
        </p>
        <p
          className={`mt-2 text-[13px] font-medium leading-snug ${styles.subtext}`}
        >
          {t(subtext)}
        </p>
      </div>
    </div>
  );
};

export default StatisticsCard;