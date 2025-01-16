import { Bell } from "lucide-react";

export const NotificationButton = () => {
  return (
    <button className="p-2 rounded-full text-blue-400 bg-gray-100 hover:bg-gray-200">
      <Bell size={20} />
    </button>
  );
};
