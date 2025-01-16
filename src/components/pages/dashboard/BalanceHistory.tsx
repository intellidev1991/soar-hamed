"use client";

import { CardTitle } from "@/components/modules";
import { ResponsiveLine } from "@nivo/line";

export type BalanceHistoryType = {
  id: string;
  data: {
    x: string;
    y: number;
  }[];
};

type BalanceHistoryProps = {
  data: BalanceHistoryType[];
};

export const BalanceHistory = ({ data }: BalanceHistoryProps) => {
  return (
    <div className="w-full h-full">
      <CardTitle title="Balance History" />
      <div className="bg-white rounded-3xl p-6">
        <div className="h-72 w-full">
          <ResponsiveLine
            data={data}
            margin={{ top: 10, right: 10, bottom: 30, left: 50 }}
            xScale={{
              type: "point",
            }}
            yScale={{
              type: "linear",
              min: 0,
              max: 800,
              stacked: true,
            }}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 16,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 16,
              tickRotation: 0,
              tickValues: [0, 200, 400, 600, 800],
            }}
            enableGridX={true}
            gridXValues={["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]}
            enableGridY={true}
            gridYValues={[0, 200, 400, 600, 800]}
            colors={["#4169E1"]}
            lineWidth={3}
            enablePoints={false}
            pointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            enableArea={true}
            areaOpacity={0.1}
            useMesh={true}
            theme={{
              grid: {
                line: {
                  stroke: "#ddd",
                  strokeDasharray: "4 4",
                  strokeWidth: 1,
                },
              },
              axis: {
                ticks: {
                  text: {
                    fill: "#999",
                    fontSize: 12,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
