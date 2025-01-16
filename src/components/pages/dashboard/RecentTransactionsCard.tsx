"use client";

import { CardTitle } from "@/components/modules";
import {
  TransactionItem,
  TransactionType,
} from "@/components/modules/TransactionItem";

type RecentTransactionsCardProps = { data: TransactionType[] };

export const RecentTransactionsCard = ({
  data,
}: RecentTransactionsCardProps) => {
  return (
    <div className="shrink-0">
      <CardTitle title="Recent Transactions" />
      <div className="bg-white rounded-3xl w-full max-h-60 h-full p-6">
        {data?.map((transaction, index) => (
          <TransactionItem transaction={transaction} key={index} />
        ))}
      </div>
    </div>
  );
};
