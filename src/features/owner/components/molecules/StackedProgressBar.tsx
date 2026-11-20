"use client";

import React from "react";
import { AttendanceSegment } from "../../types/owner.types";

interface StackedProgressBarProps {
  segments: AttendanceSegment[];
}

export const StackedProgressBar: React.FC<StackedProgressBarProps> = ({
  segments,
}) => {
  return (
    <div className="flex h-5 w-full overflow-hidden rounded-full bg-gray-100">
      {segments.map((segment, index) => (
        <div
          key={segment.id}
          style={{
            width: `${segment.percentage}%`,
            backgroundColor: segment.color,
          }}
          className={`h-full transition-all duration-500 ${
            index !== segments.length - 1 ? "border-r-[3px] border-white" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default StackedProgressBar;