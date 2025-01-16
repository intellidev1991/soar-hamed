"use client";

import { CardTitle } from "@/components/modules";
import { ResponsivePie } from "@nivo/pie";

export type ExpenseStatisticsType = {
  id: string;
  label: string;
  value: number;
};

export type ExpenseStatisticsProps = {
  data: ExpenseStatisticsType[];
};

export const ExpenseStatistics = ({ data }: ExpenseStatisticsProps) => {
  return (
    <div className="w-full h-full">
      <CardTitle title="Expense Statistics" />
      <div className="bg-white rounded-3xl p-6">
        <div className="h-full max-h-full w-full">
          <div style={{ height: "384px" }}>
            <ResponsivePie
              data={data}
              margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
              innerRadius={0}
              padAngle={5}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={["#343C6A", "#FC7900", "#396AFF", "#232323"]}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
              arcLabelsTextColor="white"
              arcLabel={(e) => e.value + "% " + e.id}
              arcLabelsRadiusOffset={0.65}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
