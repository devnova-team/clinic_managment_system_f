"use client";

import React from "react";
import Avatar from "@/components/atoms/Avatar";
import { cn } from "@/lib/cn";

export interface PatientInfoProps {
  name: string;
  initials?: string;
  avatarColor?: string;
  color?: string;
  className?: string;
}

export const PatientInfo: React.FC<PatientInfoProps> = ({
  name,
  className = "",
}) => {
  return (
    <div className={cn("flex items-center gap-3 min-w-0", className)}>
      <Avatar name={name} size="md" />
      <span className="truncate text-sm font-semibold text-gray-900">
        {name}
      </span>
    </div>
  );
};

export default PatientInfo;