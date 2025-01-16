"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Receipt,
  User,
  ChartCandlestick,
  CreditCard,
  HandCoins,
  Wrench,
  Lightbulb,
  Settings,
  ClipboardList,
} from "lucide-react";

const menuItems = [
  { icon: <Home size={20} />, name: "Dashboard", path: "/dashboard" },
  { icon: <Receipt size={20} />, name: "Transactions", path: "/transactions" },
  { icon: <User size={20} />, name: "Accounts", path: "/accounts" },
  {
    icon: <ChartCandlestick size={20} />,
    name: "Investments",
    path: "/investments",
  },
  {
    icon: <CreditCard size={20} />,
    name: "Credit Cards",
    path: "/credit-cards",
  },
  { icon: <HandCoins size={20} />, name: "Loans", path: "/loans" },
  {
    icon: <Wrench size={20} />,
    name: "Services",
    path: "/services",
  },
  {
    icon: <Lightbulb size={20} />,
    name: "My Privileges",
    path: "/my-privileges",
  },
  {
    icon: <Settings size={20} />,
    name: "Settings",
    path: "/settings",
  },
];

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const hasActiveItem = menuItems.some((item) => pathname === item.path);

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="text-black" size={24} />
          <h1 className="text-2xl font-bold">Soar Task</h1>
        </div>
      </div>

      <nav className="px-4 py-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-gray-100 text-black font-bold"
                      : hasActiveItem
                      ? "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-black font-bold"
                        : hasActiveItem
                        ? "text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
