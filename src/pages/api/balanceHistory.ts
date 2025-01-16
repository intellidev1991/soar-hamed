import { BalanceHistoryType } from "@/components/pages/dashboard/BalanceHistory";
import { NextApiRequest, NextApiResponse } from "next";

const data: BalanceHistoryType[] = [
  {
    id: "monthly trend",
    data: [
      { x: "Jul", y: 120 },
      { x: "Aug", y: 320 },
      { x: "Sep", y: 480 },
      { x: "Oct", y: 780 },
      { x: "Nov", y: 220 },
      { x: "Dec", y: 580 },
      { x: "Jan", y: 640 },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
