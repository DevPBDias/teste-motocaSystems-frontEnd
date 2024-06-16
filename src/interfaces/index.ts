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
  btnHandler: (() => void) | undefined;
  icon: string;
  type: string;
}

export interface ParamsProps {
  params: {
    id: string;
  };
}

export interface FormProps {
  title: string;
  icon: string;
  btnName: string;
  btnHandleFunction?: () => void;
}

export interface InputProps {
  labelName?: string;
  placeholder?: string;
  idName?: string;
  defaultValue?: string;
}

export interface UseFormProps {
  registerName: string;
}
