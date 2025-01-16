import { Menu, X } from "lucide-react";

type HamburgerMenuButtonProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export const HamburgerMenuButton = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: HamburgerMenuButtonProps) => {
  return (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100"
    >
      {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};
