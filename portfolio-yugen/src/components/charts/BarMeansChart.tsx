"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  data: Array<{ regiao?: string; media?: string | number }>;
  label?: string;
};

export default function BarMeansChart({
  data = [],
  label = "Médias por Região",
}: Props) {
  const chartData = data.map(d => ({
    name: d.regiao || String((d as any).regiao || ""),
    value: Number(String(d.media ?? 0).replace(",", ".")) || 0,
  }));

  return (
    <div className="bg-[#0b0b0b] p-3 border border-[#1c1c1c]">
      <h4 className="text-base font-bold text-gray-400 mb-2">{label}</h4>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid stroke="#1c1c1c" vertical={false} />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Bar dataKey="value" fill="#2997ff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
