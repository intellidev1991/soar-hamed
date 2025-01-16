"use client";

import { Tab, TabsView } from "@/components/modules";
import { ProfileForm } from "@/components/pages/settings/ProfileForm";
import { NotImplementedCard } from "@/components/modules/NotImplementedCard";

export default function SettingsPage() {
  return (
    <div className="bg-white rounded-3xl min-h-c w-full p-6">
      <TabsView>
        <Tab label="Edit Profile">
          <ProfileForm />
        </Tab>
        <Tab label="Preferences">
          <NotImplementedCard />
        </Tab>
        <Tab label="Security">
          <NotImplementedCard />
        </Tab>
      </TabsView>
    </div>
  );
}
