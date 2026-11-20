"use client";

import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n/useT";
import { TimeRange } from "../../types/owner.types";

export interface TimeRangeFilterProps {
  defaultValue?: TimeRange;
  selected?: TimeRange;
  onChange?: (range: TimeRange) => void;
  className?: string;
}

const TIME_RANGES: TimeRange[] = ["Today", "7 days", "30 days"];

const RANGE_I18N_KEYS: Record<TimeRange, string> = {
  Today: "range_today",
  "7 days": "range_7days",
  "30 days": "range_30days",
};

export const TimeRangeFilter: React.FC<TimeRangeFilterProps> = ({
  defaultValue = "7 days",
  selected,
  onChange,
  className = "",
}) => {
  const t = useT();
  const [internalRange, setInternalRange] = useState<TimeRange>(defaultValue);

  const activeRange = selected !== undefined ? selected : internalRange;

  const handleRangeClick = (range: TimeRange) => {
    setInternalRange(range);
    onChange?.(range);
  };

  const getRangeLabel = (range: TimeRange) => {
    const key = RANGE_I18N_KEYS[range];
    const translated = t(key);
    return translated === key ? range : translated;
  };

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {TIME_RANGES.map((range) => {
        const isActive = activeRange === range;
        return (
          <button
            key={range}
            type="button"
            onClick={() => handleRangeClick(range)}
            className={cn(
              "rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
              isActive
                ? "border-[#122b2b] bg-[#122b2b] text-white shadow-sm"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {getRangeLabel(range)}
          </button>
        );
      })}
    </div>
  );
};

export default TimeRangeFilter;