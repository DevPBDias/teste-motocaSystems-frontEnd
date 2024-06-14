interface TitleProps {
  title: string;
}

const PageTitle = ({ title }: TitleProps) => {
  return <h3>{title}</h3>;
};

export default PageTitle;
