import { ChevronRight } from "lucide-react";

type CircleButtonRightProps = {
  onClick?: () => void;
};

export const CircleButtonRight = ({ onClick }: CircleButtonRightProps) => {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 shadow-md p-2 hover:bg-gray-100 rounded-full flex justify-center items-center"
    >
      <ChevronRight className="w-6 h-6 text-skyBlue" />
    </button>
  );
};
