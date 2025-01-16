import { TransactionType } from "@/components/modules/TransactionItem";
import { NextApiRequest, NextApiResponse } from "next";

const data: TransactionType[] = [
  {
    type: "card",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountColor: "text-red-500",
    bgColor: "bg-yellow-100",
  },
  {
    type: "paypal",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountColor: "text-green-500",
    bgColor: "bg-blue-100",
  },
  {
    type: "person",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountColor: "text-green-500",
    bgColor: "bg-teal-100",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
