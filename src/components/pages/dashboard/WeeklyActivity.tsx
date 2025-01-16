"use client";

import { CardTitle } from "@/components/modules";
import { ResponsiveBar } from "@nivo/bar";

export type WeeklyActivity = {
  day: string;
  Deposit: number;
  Withdraw: number;
};

type WeeklyActivityProps = {
  data: WeeklyActivity[];
};

export const WeeklyActivity = ({ data }: WeeklyActivityProps) => {
  return (
    <div className="w-full h-full">
      <CardTitle title="Weekly Activity" />
      <div className="bg-white rounded-3xl p-6">
        <div className="h-96 w-full">
          <ResponsiveBar
            data={data}
            keys={["Deposit", "Withdraw"]}
            indexBy="day"
            margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
            padding={0.3}
            innerPadding={12}
            groupMode="grouped"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={["#396AFF", "#232323"]}
            borderRadius={18}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: "keys",
                anchor: "top-right",
                direction: "row",
                justify: false,
                translateX: 20,
                translateY: -25,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
              },
            ]}
            role="application"
            ariaLabel="Deposit and Withdrawal Chart"
          />
        </div>
      </div>
    </div>
  );
};
