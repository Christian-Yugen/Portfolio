"use client";

import React from "react";

type Interval = { label: string; diff: number; lo: number; hi: number };

export default function TukeyIntervalChart(): React.ReactElement {
  const data: Interval[] = [
    { label: "Três Lagoas vs Inocência", diff: 10.7, lo: 7.21, hi: 14.19 },
    { label: "Três Lagoas vs Outros Estados", diff: 5.2, lo: 1.71, hi: 8.69 },
    { label: "Outros Estados vs Inocência", diff: 5.5, lo: 2.01, hi: 8.99 },
  ];

  const width = 520;
  const height = 220;
  const margin = { left: 140, right: 24, top: 20, bottom: 20 };

  const minX = Math.min(...data.map(d => d.lo), 0) - 1;
  const maxX = Math.max(...data.map(d => d.hi), 0) + 1;

  const xScale = (v: number) => {
    return (
      margin.left +
      ((v - minX) / (maxX - minX)) * (width - margin.left - margin.right)
    );
  };

  return (
    <div className="bg-[#0b0b0b] border border-[#151515] p-3">
      <h4 className="text-sm font-bold text-gray-300 mb-2">
        Tukey HSD — Intervalos de Confiança 95%
      </h4>
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Intervalos de confiança de Tukey"
      >
        {/* zero line */}
        <line
          x1={xScale(0)}
          x2={xScale(0)}
          y1={margin.top}
          y2={height - margin.bottom}
          stroke="#374151"
          strokeDasharray="4 4"
          strokeWidth={1}
        />

        {data.map((d, i) => {
          const y = margin.top + i * 56;
          const xLo = xScale(d.lo);
          const xHi = xScale(d.hi);
          const xCenter = xScale(d.diff);
          const good = d.lo > 0 || d.hi < 0 ? true : d.lo > 0 || d.hi < 0; // none cross zero in our data
          return (
            <g key={d.label}>
              {/* label */}
              <text x={12} y={y + 6} fill="#d1d5db" fontSize={12}>
                {d.label}
              </text>

              {/* interval line */}
              <line
                x1={xLo}
                x2={xHi}
                y1={y + 6}
                y2={y + 6}
                stroke={good ? "#00ff66" : "#ffb86b"}
                strokeWidth={3}
              />

              {/* point estimate */}
              <rect
                x={xCenter - 4}
                y={y + 2}
                width={8}
                height={8}
                fill="#2997ff"
              />

              {/* numeric labels */}
              <text x={xHi + 8} y={y + 10} fill="#9CA3AF" fontSize={11}>
                {d.lo.toFixed(2)} — {d.hi.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* axis ticks */}
        {Array.from({ length: 6 }).map((_, i) => {
          const v = minX + (i * (maxX - minX)) / 5;
          const x = xScale(v);
          return (
            <g key={i}>
              <line
                x1={x}
                x2={x}
                y1={height - margin.bottom}
                y2={height - margin.bottom + 6}
                stroke="#1c1c1c"
              />
              <text
                x={x}
                y={height - margin.bottom + 18}
                textAnchor="middle"
                fill="#9CA3AF"
                fontSize={11}
              >
                {v.toFixed(1)}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="text-[11px] text-gray-400 mt-2">
        Linha pontilhada vertical: zero (neutralidade). Intervalos não cruzam
        zero — diferenças significativas.
      </div>
    </div>
  );
}
