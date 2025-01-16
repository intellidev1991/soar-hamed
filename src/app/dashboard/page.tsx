import { BalanceHistory } from "@/components/pages/dashboard/BalanceHistory";
import { ExpenseStatistics } from "@/components/pages/dashboard/ExpenseStatistics";
import { MyCards } from "@/components/pages/dashboard/MyCards";
import { QuickTransfer } from "@/components/pages/dashboard/QuickTransfer";
import { RecentTransactionsCard } from "@/components/pages/dashboard/RecentTransactionsCard";
import { WeeklyActivity } from "@/components/pages/dashboard/WeeklyActivity";
import { headers } from "next/headers";

async function getBaseURL() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const baseUrl = `${protocol}://${host}`;
  return baseUrl;
}

async function fetchTransactionData() {
  const baseUrl = await getBaseURL();
  const res = await fetch(`${baseUrl}/api/transactions`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch transactions");
  return res.json();
}

async function fetchWeeklyActivitiesData() {
  const baseUrl = await getBaseURL();
  const res = await fetch(`${baseUrl}/api/weeklyActivities`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch weekly activities");
  return res.json();
}

async function fetchExpensesStatisticsData() {
  const baseUrl = await getBaseURL();
  const res = await fetch(`${baseUrl}/api/expensesStatistics`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch expenses statistics");
  return res.json();
}

async function fetchQuickTransferData() {
  const baseUrl = await getBaseURL();
  const res = await fetch(`${baseUrl}/api/quickTransfer`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch quick transfer");
  return res.json();
}

async function fetchBalanceHistoryData() {
  const baseUrl = await getBaseURL();
  const res = await fetch(`${baseUrl}/api/balanceHistory`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch balance history");
  return res.json();
}

export default async function DashboardPage() {
  const transactionsData = await fetchTransactionData();
  const weeklyActivitiesData = await fetchWeeklyActivitiesData();
  const expensesStatisticsData = await fetchExpensesStatisticsData();
  const quickTransferData = await fetchQuickTransferData();
  const balanceHistoryData = await fetchBalanceHistoryData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      <div className="md:col-span-2">
        <MyCards />
      </div>
      <div className="md:col-span-1">
        <RecentTransactionsCard data={transactionsData} />
      </div>

      <div className="md:col-span-2">
        <WeeklyActivity data={weeklyActivitiesData} />
      </div>
      <div className="md:col-span-1">
        <ExpenseStatistics data={expensesStatisticsData} />
      </div>

      <div className="md:col-span-1">
        <QuickTransfer data={quickTransferData} />
      </div>
      <div className="md:col-span-2">
        <BalanceHistory data={balanceHistoryData} />
      </div>
    </div>
  );
}
