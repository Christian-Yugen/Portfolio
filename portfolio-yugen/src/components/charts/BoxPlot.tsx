"use client";

import React from "react";

type Series = {
  name: string;
  values: number[];
  color?: string;
};

type Props = {
  data: Series[];
  width?: number;
  height?: number;
};

function sorted(arr: number[]) {
  return [...arr].sort((a, b) => a - b);
}

function quantile(sortedArr: number[], q: number) {
  if (!sortedArr.length) return NaN;
  const pos = (sortedArr.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sortedArr[base + 1] !== undefined)
    return sortedArr[base] + rest * (sortedArr[base + 1] - sortedArr[base]);
  return sortedArr[base];
}

export default function BoxPlot({
  data = [],
  width = 640,
  height = 260,
}: Props) {
  const margin = { top: 16, right: 12, bottom: 36, left: 48 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;

  const stats = data.map(s => {
    const vals = sorted(s.values);
    const q1 = quantile(vals, 0.25);
    const median = quantile(vals, 0.5);
    const q3 = quantile(vals, 0.75);
    const iqr = q3 - q1;
    const lowerFence = q1 - 1.5 * iqr;
    const upperFence = q3 + 1.5 * iqr;
    const whiskerLow = vals.find(v => v >= lowerFence) ?? vals[0];
    const whiskerHigh =
      [...vals].reverse().find(v => v <= upperFence) ?? vals[vals.length - 1];
    const outliers = vals.filter(v => v < whiskerLow || v > whiskerHigh);
    return {
      name: s.name,
      q1,
      median,
      q3,
      whiskerLow,
      whiskerHigh,
      outliers,
      color: s.color,
    };
  });

  const globalMin = Math.min(...stats.map(s => s.whiskerLow));
  const globalMax = Math.max(...stats.map(s => s.whiskerHigh));
  const range = globalMax - globalMin || 1;

  const xForIndex = (i: number) =>
    margin.left + (i + 0.5) * (plotW / data.length);
  const scaleY = (v: number) => margin.top + ((globalMax - v) / range) * plotH;

  const ticks = 5;
  const tickValues = Array.from(
    { length: ticks + 1 },
    (_, i) => globalMin + (range * i) / ticks
  );

  return (
    <div className="bg-[#080808] border border-[#151515] p-3">
      <h4 className="text-sm font-bold text-gray-400 mb-2">
        Boxplot — Distribuição Regional (Alta Densidade)
      </h4>
      <div style={{ width: "100%", height }}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          height="100%"
          role="img"
          aria-label="Boxplot comparativo"
        >
          {/* Y grid and labels */}
          {tickValues.map((t, i) => {
            const y = scaleY(t);
            return (
              <g key={i}>
                <line
                  x1={margin.left}
                  x2={width - margin.right}
                  y1={y}
                  y2={y}
                  stroke="#151515"
                  strokeWidth={1}
                />
                <text x={10} y={y + 4} fill="#9CA3AF" fontSize={11}>
                  {t.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Boxes */}
          {stats.map((s, i) => {
            const cx = xForIndex(i);
            const boxW = Math.min(56, plotW / (data.length * 1.8));
            const left = cx - boxW / 2;
            const right = cx + boxW / 2;
            const yQ1 = scaleY(s.q1);
            const yQ3 = scaleY(s.q3);
            const yMedian = scaleY(s.median);
            const yWhiskerLow = scaleY(s.whiskerLow);
            const yWhiskerHigh = scaleY(s.whiskerHigh);
            const stroke =
              s.color ??
              (i === 0 ? "#2997ff" : i === 1 ? "#7cc0ff" : "#00ff66");

            return (
              <g key={s.name}>
                {/* whiskers */}
                <line
                  x1={cx}
                  x2={cx}
                  y1={yWhiskerLow}
                  y2={yQ1}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                />
                <line
                  x1={cx}
                  x2={cx}
                  y1={yQ3}
                  y2={yWhiskerHigh}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                />
                {/* whisker caps */}
                <line
                  x1={cx - boxW / 4}
                  x2={cx + boxW / 4}
                  y1={yWhiskerLow}
                  y2={yWhiskerLow}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                />
                <line
                  x1={cx - boxW / 4}
                  x2={cx + boxW / 4}
                  y1={yWhiskerHigh}
                  y2={yWhiskerHigh}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                />

                {/* box */}
                <rect
                  x={left}
                  y={yQ3}
                  width={boxW}
                  height={Math.max(1, yQ1 - yQ3)}
                  fill="#000000"
                  stroke={stroke}
                  strokeWidth={1}
                />

                {/* median */}
                <line
                  x1={left}
                  x2={right}
                  y1={yMedian}
                  y2={yMedian}
                  stroke={stroke}
                  strokeWidth={2}
                />

                {/* sample points (jitter) */}
                {data[i].values.map((v, idx) => {
                  const yv = scaleY(v);
                  const jitter = ((idx % 5) - 2) * (boxW / 8);
                  const cxPt = cx + jitter;
                  const isOutlier = v < s.whiskerLow || v > s.whiskerHigh;
                  return (
                    <circle
                      key={idx}
                      cx={cxPt}
                      cy={yv}
                      r={isOutlier ? 3 : 2}
                      fill={isOutlier ? "#ff6b6b" : "#9CA3AF"}
                    />
                  );
                })}

                {/* label */}
                <text
                  x={cx}
                  y={height - 8}
                  fill="#e5e7eb"
                  fontSize={12}
                  textAnchor="middle"
                >
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
