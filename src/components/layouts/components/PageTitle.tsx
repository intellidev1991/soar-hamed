type PageTitleProps = {
  title: string;
};
export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="text-xl font-semibold absolute left-1/2 -translate-x-1/2 md:static md:left-0 md:transform-none md:flex-1">
      {title}
    </h1>
  );
};
