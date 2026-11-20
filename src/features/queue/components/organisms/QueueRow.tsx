import React from "react";
import PatientInfo from "../molecules/PatientInfo";
import { Appointment } from "@/features/owner/types/owner.types";
import StatusBadge from "../atoms/StatusBadge";
import ProgressBar from "@/components/atoms/ProgressBar";
import NextActionGroup from "../molecules/NextActionGroup";



interface QueueRowProps {
  data: Appointment;
  onCheckIn?: () => void;
  onCancel?: () => void;
  onStartConsultation?: () => void;
  onGoToBilling?: () => void;
}

export const QueueRow: React.FC<QueueRowProps> = ({
  data,
  onCheckIn,
  onCancel,
  onStartConsultation,
  onGoToBilling,
}) => {
  return (
    <div className="grid grid-cols-[70px_200px_150px_140px_120px_1fr] items-center gap-4 px-7 py-3.5 transition-colors hover:bg-gray-50/60">
      {/* 1. Time */}
      <span className="text-sm font-semibold text-gray-600">
        {data.time}
      </span>

      {/* 2. Patient Info */}
      <PatientInfo
        name={data.name}
        initials={data.initials}
        avatarColor={data.color}
      />

      {/* 3. Doctor */}
      <span className="truncate text-sm font-medium text-gray-600">
        {data.doctor}
      </span>

      {/* 4. Status Badge (مترجم تلقائياً) */}
      <div>
        <StatusBadge status={data.status} />
      </div>

      {/* 5. Stepped Progress */}
      <div>
        <ProgressBar
          completedSteps={data.steps}
          totalSteps={4}
          activeColor={data.progressColor}
        />
      </div>

      {/* 6. Action Group (مترجم تلقائياً) */}
      <div className="flex justify-end">
        <NextActionGroup
          status={data.status}
          currentAction={data.action}
          onCheckIn={onCheckIn}
          onCancel={onCancel}
          onStartConsultation={onStartConsultation}
          onGoToBilling={onGoToBilling}
        />
      </div>
    </div>
  );
};

export default QueueRow;