import { CircleDollarSign, CircleParking, CreditCard } from "lucide-react";

export type TransactionType = {
  type: "card" | "paypal" | "person";
  title: string;
  date: string;
  amount: string;
  amountColor: string;
  bgColor: string;
};

type TransactionItemProps = {
  transaction: TransactionType;
};

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const icon =
    transaction.type === "card" ? (
      <CreditCard size={24} color="#FFBB38" />
    ) : transaction.type === "paypal" ? (
      <CircleParking size={24} color="#396AFF" />
    ) : (
      <CircleDollarSign size={24} color="#16DBCC" />
    );
  return (
    <div className="flex items-center justify-between mb-4 last:mb-0 shrink-0">
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full ${transaction.bgColor}`}
      >
        <span className="text-xl">{icon}</span>
      </div>

      <div className="flex-1 ml-4">
        <p className="text-sm font-medium text-black">{transaction.title}</p>
        <p className="text-xs text-gray-500">{transaction.date}</p>
      </div>

      <p className={`text-sm font-semibold ${transaction.amountColor}`}>
        {transaction.amount}
      </p>
    </div>
  );
};
