"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { RevenueDataPoint } from "../../types/owner.types";
import { ChartToggle } from "../atoms/ChartToggle";

interface RevenueChartCardProps {
  data: RevenueDataPoint[];
  highlightInfo: { text: string };
}

interface CustomLabelProps {
  x?: number;
  y?: number;
  width?: number;
  value?: number | string;
  index?: number;
  data?: RevenueDataPoint[];
}

// small component to render the label above the highlighted bar
const CustomLabel: React.FC<CustomLabelProps> = ({
  x = 0,
  y = 0,
  width = 0,
  value,
  index = 0,
  data = [],
}) => {
  const isHighlighted = data[index].isHighlighted;

  if (!isHighlighted) return null;

  return (
    <text
      x={x + width / 2}
      y={y - 10} // increase the y value to move the label above the bar
      fill="#111827" //
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
    >
      {value}
    </text>
  );
};

export const RevenueChartCard: React.FC<RevenueChartCardProps> = ({
  data,
  highlightInfo,
}) => {
  const [activeView, setActiveView] = useState<"Chart" | "Table">("Chart");

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* 1. Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Revenue by day</h2>
          <p className="mt-1 text-sm text-gray-500">
            EGP thousands · last 7 days
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            {highlightInfo.text}
          </div>
          <ChartToggle activeView={activeView} onViewChange={setActiveView} />
        </div>
      </div>

      {/* 2. Chart Section */}
      {activeView === "Chart" ? (
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
              barSize={40}
            >
              <CartesianGrid
                strokeDasharray="0"
                vertical={false}
                stroke="#F3F4F6"
              />

              {/* days  */}
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                ticks={[0, 10, 20, 30]}
              />

              {/* columns */}
              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                label={<CustomLabel data={data} />}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isHighlighted ? "#124143" : "#38B2AC"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50">
          <p className="text-gray-500">Table View Content</p>
        </div>
      )}
    </div>
  );
};
