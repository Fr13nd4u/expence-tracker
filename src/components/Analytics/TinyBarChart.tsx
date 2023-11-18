import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { formatAmount } from "../helpers";

interface TinyBarChartProps {
  data: { month: string; amount: number }[];
}

const TinyBarChart: React.FC<TinyBarChartProps> = ({ data }) => {
  const newData = data.map((item) => {
    return {
      ...item,
      amountString: "$" + formatAmount(item.amount),
    };
  });

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={newData}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Bar
          dataKey="amount"
          fill="#8234F8"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          shape={(props: any) => {
            const { x, y, width, height } = props;
            return (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={6}
                ry={6}
                fill="#8234F8"
              />
            );
          }}
        >
          <LabelList dataKey="amountString" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart;
