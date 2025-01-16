import { Send } from "lucide-react";

type SendMoneyAmountProps = {
  title: string;
  inputPlaceholder?: string;
  sendActionText?: string;
  value: string;
  onChange: (value: string) => void;
  onSendAction?: () => void;
};

export const SendMoneyAmount = ({
  title = "Write Amount",
  sendActionText = "Send",
  inputPlaceholder,
  value,
  onChange,
  onSendAction,
}: SendMoneyAmountProps) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {title && (
        <label className="block text-lg text-skyBlue mb-2">{title}</label>
      )}
      <div className="flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder={inputPlaceholder || "500"}
            className="w-full px-6 py-4 text-skyBlue bg-gray-50 rounded-full text-xl focus:outline-none"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            onClick={onSendAction}
            className="absolute right-0 top-0 flex items-center space-x-4 px-6 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">{sendActionText}</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
