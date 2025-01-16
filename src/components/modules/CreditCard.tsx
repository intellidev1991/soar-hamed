import React from "react";
import Image from "next/image";
import { formatCardNumber, formatCurrency } from "@/tools";

type CreditCardProps = {
  color: "black" | "white";
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
};

export const CreditCard = ({
  color,
  balance,
  cardHolder,
  validThru,
  cardNumber,
}: CreditCardProps) => {
  const isBlack = color === "black";

  return (
    <div
      className={`relative shrink-0 text-white rounded-3xl w-full max-w-sm max-h-60 overflow-hidden ${
        isBlack
          ? "bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900"
          : "border-solid border border-lightBlue bg-white"
      }`}
    >
      <div className="p-6">
        <div className="mb-4 flex flex-row justify-between">
          <div>
            <h3 className={`text-xs ${isBlack ? "" : "text-skyBlue"}`}>
              Balance
            </h3>
            <p
              className={`text-2xl font-bold ${isBlack ? "" : "text-midBlue"}`}
            >
              {formatCurrency(balance)}
            </p>
          </div>
          <Image
            aria-hidden
            src={isBlack ? "/images/chip_white.png" : "/images/chip_black.png"}
            alt="chip"
            width={46}
            height={30}
          />
        </div>

        <div className="flex justify-between mb-6">
          <div>
            <h4
              className={`text-xs uppercase ${
                isBlack ? "text-gray-400" : "text-skyBlue"
              }`}
            >
              Card Holder
            </h4>
            <p
              className={`text-sm font-semibold ${
                isBlack ? "" : "text-midBlue"
              }`}
            >
              {cardHolder}
            </p>
          </div>
          <div className="pr-20">
            <h4
              className={`text-xs uppercase ${
                isBlack ? "text-gray-400" : "text-skyBlue"
              }`}
            >
              Valid Thru
            </h4>
            <p
              className={`text-sm font-semibold ${
                isBlack ? "" : "text-midBlue"
              }`}
            >
              {validThru}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`inset-x-0 px-6 py-4 flex justify-between items-center ${
          isBlack
            ? "bg-gradient-to-l from-gray-900 via-gray-700 to-gray-500"
            : "border-solid border-t border-lightBlue"
        }`}
      >
        <p
          className={`text-lg font-semibold tracking-wider ${
            isBlack ? "" : "text-midBlue"
          }`}
        >
          {formatCardNumber(cardNumber)}
        </p>

        <div className="relative flex items-center">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-500 rounded-full -ml-3"></div>
        </div>
      </div>
    </div>
  );
};
