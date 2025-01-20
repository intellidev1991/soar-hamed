"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SearchBox } from "./SearchBox";
import { ProfileButton } from "./ProfileButton";
import { NotificationButton } from "./NotificationButton";
import { SettingsButton } from "./SettingsButton";
import { PageTitle } from "./PageTitle";
import { HamburgerMenuButton } from "./HamburgerMenuButton";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (!pathname) return "Overview";
    const path = pathname.split("/").pop();
    if (!path || path === "dashboard") return "Overview";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="fixed top-0 right-0 z-30 w-full md:pl-64 bg-white border-b border-gray-200">
      <div className="px-4 py-3 flex items-center justify-between">
        <HamburgerMenuButton
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <PageTitle title={getPageTitle()} />

        <div className="hidden md:flex items-center gap-4">
          <SearchBox />
          <SettingsButton />
          <NotificationButton />
          <ProfileButton />
        </div>

        <div className="md:hidden">
          <ProfileButton />
        </div>
      </div>

      <div className="md:hidden px-4 py-2 bg-white border-t border-gray-200">
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
