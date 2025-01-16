import { WeeklyActivity } from "@/components/pages/dashboard/WeeklyActivity";
import { NextApiRequest, NextApiResponse } from "next";

const weeklyActivity: WeeklyActivity[] = [
  {
    day: "Sat",
    Deposit: 240,
    Withdraw: 475,
  },
  {
    day: "Sun",
    Deposit: 125,
    Withdraw: 340,
  },
  {
    day: "Mon",
    Deposit: 260,
    Withdraw: 320,
  },
  {
    day: "Tue",
    Deposit: 360,
    Withdraw: 475,
  },
  {
    day: "Wed",
    Deposit: 240,
    Withdraw: 150,
  },
  {
    day: "Thu",
    Deposit: 240,
    Withdraw: 380,
  },
  {
    day: "Fri",
    Deposit: 325,
    Withdraw: 380,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(weeklyActivity);
}
