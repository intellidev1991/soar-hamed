type CardTitleProps = {
  title: string;
  actionText?: string;
  actionClick?: () => void;
};

export const CardTitle = ({
  title,
  actionText,
  actionClick,
}: CardTitleProps) => {
  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <div className="text-xl font-semibold text-midBlue">{title}</div>
      <div
        onClick={actionClick ?? undefined}
        className={`text-lg font-semibold hover:underline text-midBlue ${
          actionClick ? "cursor-pointer" : ""
        }`}
      >
        {actionText ?? ""}
      </div>
    </div>
  );
};
