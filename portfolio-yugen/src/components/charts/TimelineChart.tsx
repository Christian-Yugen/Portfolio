"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  data: Array<{ data?: string; valor?: number }>;
  label?: string;
};

export default function TimelineChart({
  data = [],
  label = "Eventos por Ano",
}: Props) {
  // Agrupa eventos por ano (extrai ano da string `data`)
  const counts: Record<string, number> = {};
  data.forEach(d => {
    const raw = String(d.data || "");
    const year = raw.split("-")[0] || raw;
    if (!year) return;
    counts[year] = (counts[year] || 0) + 1;
  });

  const chartData = Object.keys(counts)
    .sort()
    .map(year => ({ name: year, y: counts[year] }));

  return (
    <div className="bg-[#0b0b0b] p-3 border border-[#1c1c1c] mb-4">
      <h4 className="text-base font-bold text-gray-400 mb-2">{label}</h4>
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#1c1c1c" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis allowDecimals={false} stroke="#9CA3AF" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#2997ff"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
