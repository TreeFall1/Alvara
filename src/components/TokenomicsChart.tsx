"use client";

import {
  ArcElement,
  Chart as ChartJS,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

type TokenomicsChartProps = {
  labels: string[];
  chartLabel: string;
};

export const TOKENOMICS_DISTRIBUTION = [40, 15, 15, 10, 10, 10] as const;
export const TOKENOMICS_COLORS = ["#ff5b35", "#c7ff49", "#f0ede5", "#7f9cff", "#36dec4", "#ae72ff"] as const;
export const TOKEN_SUPPLY = 1_000_000_000;

export function TokenomicsChart({ labels, chartLabel }: TokenomicsChartProps) {
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const data: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [{
      data: [...TOKENOMICS_DISTRIBUTION],
      backgroundColor: [...TOKENOMICS_COLORS],
      borderColor: "#0b0c0a",
      borderWidth: 4,
      borderRadius: 7,
      hoverBorderWidth: 2,
      hoverOffset: 12,
      spacing: 1,
    }],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "38%",
    rotation: -90,
    animation: reduceMotion ? false : {
      duration: 850,
      easing: "easeOutQuart",
      animateRotate: true,
      animateScale: false,
    },
    transitions: reduceMotion ? undefined : {
      active: {
        animation: {
          duration: 320,
          easing: "easeOutCubic",
        },
      },
    },
    interaction: { mode: "nearest", intersect: true },
    plugins: {
      legend: { display: false },
      tooltip: {
        displayColors: false,
        backgroundColor: "#f4f1e9",
        titleColor: "#11110f",
        bodyColor: "#11110f",
        borderColor: "rgba(17, 17, 15, .16)",
        borderWidth: 1,
        cornerRadius: 10,
        padding: 15,
        caretPadding: 10,
        titleFont: { family: "Arial, sans-serif", size: 14, weight: 600, lineHeight: 1.35 },
        bodyFont: { family: "Arial, sans-serif", size: 18, weight: 700, lineHeight: 1.35 },
        callbacks: {
          label: (context) => `${context.parsed}%`,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} role="img" aria-label={chartLabel}/>;
}
