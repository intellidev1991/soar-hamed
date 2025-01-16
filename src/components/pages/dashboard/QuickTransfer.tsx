"use client";

import { useState } from "react";
import {
  CardTitle,
  CircleButtonRight,
  TeamMemberItem,
  SendMoneyAmount,
} from "@/components/modules";

type QuickTransferProps = {
  data: TeamMemberItem[];
};

export const QuickTransfer = ({ data }: QuickTransferProps) => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberItem>(
    data[0] || {}
  );
  const [amount, setAmount] = useState("");

  const handleSendAction = () => {};
  const handleNextButton = () => {};

  return (
    <div className="w-full h-full">
      <CardTitle title="Quick Transfer" />
      <div className="bg-white rounded-3xl p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center space-x-6 mb-12 overflow-x-scroll">
              {data.map((member, index) => (
                <TeamMemberItem
                  key={index}
                  member={member}
                  isActive={selectedMember.id === member.id}
                  onClick={(item) => setSelectedMember(item)}
                />
              ))}
            </div>
            <CircleButtonRight onClick={handleNextButton} />
          </div>

          <SendMoneyAmount
            title="Write Amount"
            sendActionText="Send"
            value={amount}
            onChange={(val) => setAmount(val)}
            onSendAction={handleSendAction}
          />
        </div>
      </div>
    </div>
  );
};
