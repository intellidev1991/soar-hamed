"use client";

import { CardTitle, CreditCard } from "@/components/modules";

export const MyCards = () => {
  return (
    <div>
      <CardTitle title="My Cards" actionText="See All" actionClick={() => {}} />
      <div className="flex flex-row justify-between gap-8 overflow-x-scroll">
        <CreditCard
          color="black"
          balance={5756}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778123412341234"
        />
        <CreditCard
          color="white"
          balance={5756}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber="3778123412341234"
        />
      </div>
    </div>
  );
};
