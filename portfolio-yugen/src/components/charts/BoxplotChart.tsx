"use client";

import React from "react";

type Series = { name: string; values: number[] };

function quantile(sorted: number[], q: number) {
  if (sorted.length === 0) return 0;
  const idx = (sorted.length - 1) * q;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  const w = idx - lo;
  return sorted[lo] * (1 - w) + sorted[hi] * w;
}

function stats(values: number[]) {
  const s = [...values].sort((a, b) => a - b);
  const q1 = quantile(s, 0.25);
  const q2 = quantile(s, 0.5);
  const q3 = quantile(s, 0.75);
  const iqr = q3 - q1;
  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;
  const whiskerLow = s.find((v) => v >= lowerFence) ?? s[0];
  const whiskerHigh = [...s].reverse().find((v) => v <= upperFence) ?? s[s.length - 1];
  const outliers = s.filter((v) => v < whiskerLow || v > whiskerHigh);
  return { q1, q2, q3, iqr, whiskerLow, whiskerHigh, outliers, min: s[0], max: s[s.length - 1] };
}

export default function BoxplotChart(): React.ReactElement {
  // Dados mock fixos (conforme especificação)
  const series: Series[] = [
    {
      name: "Três Lagoas",
      values: [82.5, 85.1, 83.8, 86.4, 84.0, 79.2, 85.5, 83.0, 84.9, 86.0, 83.5, 84.5, 85.0, 84.2, 85.4],
    },
    {
      name: "Outros Estados",
      values: [78.2, 79.5, 80.1, 77.9, 79.0, 78.5, 81.2, 79.8, 76.5, 79.4, 80.0, 78.8, 79.2, 79.9, 79.0],
    },
    {
      name: "Inocência (Local)",
      values: [72.1, 74.3, 73.0, 75.2, 73.5, 71.8, 74.0, 72.9, 75.0, 73.2, 74.5, 73.8, 72.5, 73.6, 73.1],
    },
  ];

  const allValues = series.flatMap((s) => s.values);
  const minVal = Math.floor(Math.min(...allValues) - 1);
  const maxVal = Math.ceil(Math.max(...allValues) + 1);

  const width = 680;
  const height = 260;
  const margin = { top: 20, right: 20, bottom: 36, left: 44 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;

  const xStep = plotW / series.length;

  const yScale = (v: number) => {
    const t = (v - minVal) / (maxVal - minVal || 1);
    return margin.top + (1 - t) * plotH;
  };

  return (
    <div className="bg-[#0b0b0b] border border-[#151515] p-3">
      <h4 className="text-sm font-bold text-gray-300 mb-2">Boxplot — Distribuições regionais (Alta densidade)</h4>
      <div style={{ width: "100%", overflowX: "auto" }}>
        <svg width={width} height={height}>
          {/* Y axis ticks */}
          {Array.from({ length: 6 }).map((_, i) => {
            const v = minVal + (i * (maxVal - minVal)) / 5;
            const y = yScale(v);
            return (
              <g key={i}>
                <line x1={margin.left} x2={width - margin.right} y1={y} y2={y} stroke="#1c1c1c" />
                <text x={8} y={y + 4} fill="#9CA3AF" fontSize={11}>
                  {v.toFixed(0)}
                </text>
              </g>
            );
          })}

          {/* Boxplots */}
          {series.map((s, i) => {
            const st = stats(s.values);
            const cx = margin.left + xStep * (i + 0.5);
            const boxWidth = Math.min(72, xStep * 0.5);
            const q1y = yScale(st.q1);
            const q3y = yScale(st.q3);
            const medy = yScale(st.q2);
            const wLowY = yScale(st.whiskerLow);
            const wHighY = yScale(st.whiskerHigh);

            return (
              <g key={s.name}>
                {/* whiskers */}
                <line x1={cx} x2={cx} y1={wHighY} y2={q3y} stroke="#9CA3AF" strokeWidth={1} />
                <line x1={cx} x2={cx} y1={q1y} y2={wLowY} stroke="#9CA3AF" strokeWidth={1} />
                {/* whisker caps */}
                <line x1={cx - boxWidth * 0.35} x2={cx + boxWidth * 0.35} y1={wHighY} y2={wHighY} stroke="#9CA3AF" strokeWidth={1} />
                <line x1={cx - boxWidth * 0.35} x2={cx + boxWidth * 0.35} y1={wLowY} y2={wLowY} stroke="#9CA3AF" strokeWidth={1} />

                {/* box */}
                <rect x={cx - boxWidth / 2} y={q3y} width={boxWidth} height={Math.max(1, q1y - q3y)} fill="#071428" stroke="#2997ff" strokeWidth={1} />

                {/* median */}
                <line x1={cx - boxWidth / 2} x2={cx + boxWidth / 2} y1={medy} y2={medy} stroke="#00ff66" strokeWidth={2} />

                {/* sample points */}
                {s.values.map((v, idx) => {
                  const y = yScale(v);
                  const jitter = (idx % 5 - 2) * 4;
                  const x = cx + jitter;
                  const isOutlier = v < st.whiskerLow || v > st.whiskerHigh;
                  return <circle key={idx} cx={x} cy={y} r={isOutlier ? 3 : 2} fill={isOutlier ? "#ff6b6b" : "#9CA3AF"} />;
                })}

                {/* label */}
                <text x={cx} y={height - 8} textAnchor="middle" fill="#d1d5db" fontSize={12}>
                  {s.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
