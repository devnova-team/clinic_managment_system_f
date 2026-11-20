interface ProgressBarProps {
  completedSteps?: number;
  activeColor?: string;

  totalSteps?: number;

  value?: number;
  className?: string;
}

const ProgressBar = ({
  completedSteps,
  totalSteps = 4,
  value,
  activeColor = "#118D80",
  className = "",
}: ProgressBarProps) => {
  if (value !== undefined) {
    const safeValue = Math.min(100, Math.max(0, value));
    return (
      <div
        className={`h-2 w-full overflow-hidden rounded-full bg-gray-100 ${className}`}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${safeValue}%`,
            backgroundColor: activeColor,
          }}
        />
      </div>
    );
  }

  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {steps.map((step) => (
        <div
          key={step}
          className="h-1.5 w-6 rounded-full transition-colors"
          style={{
            backgroundColor:
              completedSteps && step <= completedSteps
                ? activeColor
                : "#E5E7EB",
          }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
