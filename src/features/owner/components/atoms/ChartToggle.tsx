import React from 'react';

interface ChartToggleProps {
  activeView: 'Chart' | 'Table';
  onViewChange: (view: 'Chart' | 'Table') => void;
}

export const ChartToggle: React.FC<ChartToggleProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white p-1">
      {(['Chart', 'Table'] as const).map((view) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-colors ${
            activeView === view
              ? 'bg-[#0b2b2b] text-white shadow' // Active state
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};