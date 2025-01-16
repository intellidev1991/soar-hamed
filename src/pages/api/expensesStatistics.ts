import { ExpenseStatisticsType } from "@/components/pages/dashboard/ExpenseStatistics";
import { NextApiRequest, NextApiResponse } from "next";

const data: ExpenseStatisticsType[] = [
  {
    id: "Entertainment",
    label: "Entertainment",
    value: 30,
  },
  {
    id: "Bill Expense",
    label: "Bill Expense",
    value: 15,
  },
  {
    id: "Investment",
    label: "Investment",
    value: 20,
  },
  {
    id: "Others",
    label: "Others",
    value: 35,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
