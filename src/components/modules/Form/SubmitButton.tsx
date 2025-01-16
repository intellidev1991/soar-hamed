type SubmitButtonProps = {
  title?: string;
  onClick?: () => void;
};
export const SubmitButton = ({ title, onClick }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full md:w-48 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
    >
      {title}
    </button>
  );
};
