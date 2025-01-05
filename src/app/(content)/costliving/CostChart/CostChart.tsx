import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartDataItem } from "../page";

type CostChartProps = {
  toPlace: string;
  fromPlace: string;
  chartData: ChartDataItem[];
  index: number;
};

export default function CostChart(props: CostChartProps) {

  const { toPlace, fromPlace, chartData, index } = props;

  const chartConfig: ChartConfig = {
    [fromPlace]: { label: fromPlace, color: "#2563eb" },
    [toPlace]: { label: toPlace, color: "#60a5fa" },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-medium">Chi phí trung bình</h2>
      <ChartContainer config={chartConfig} className="max-h-[200px] w-[60%]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="key"
            tickLine={false}
            tickMargin={10}
            width={40}
            axisLine={false}
            tickFormatter={(value) => {
              const limit = index > 1 ? 15 : 20;
              return value.length > limit
                ? value.slice(0, limit) + "..."
                : value;
            }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey={fromPlace}
            fill={`var(--color-${[fromPlace]})`}
            radius={4}
          />
          <Bar
            dataKey={toPlace}
            fill={`var(--color-${[toPlace]})`}
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
