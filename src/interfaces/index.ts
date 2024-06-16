export interface DataProps {
  id: string;
  name: string;
  color: string;
  value: string;
  status: string;
}

export interface TitleProps {
  title: string;
}

export interface BtnProps {
  text: string;
  width: string;
  height: string;
  route: string;
}

export interface ParamsProps {
  params: {
    id: string;
  };
}
