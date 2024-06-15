import { TitleProps } from "@/interfaces";

const PageTitle = ({ title }: TitleProps) => {
  return <h3 className="text-[25px] leading[37.5px] font-semibold">{title}</h3>;
};

export default PageTitle;
