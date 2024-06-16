import { RegisterProps } from "@/interfaces";
import Btn from "./Btn";
import PageTitle from "./PageTitle";

const RegisterForm = ({
  title,
  icon,
  btnName,
  btnHandleFunction,
}: RegisterProps) => {
  return (
    <section className="flex flex-col items-center mt-20 gap-12">
      <PageTitle title={title} />
      <form className="flex flex-col gap-8">
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px]"
            htmlFor=""
          >
            Código
          </label>
          <input
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
            type="text"
            name=""
            id=""
            placeholder="#"
          />
        </div>
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px]"
            htmlFor=""
          >
            Modelo da Moto
          </label>
          <input
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px]"
            htmlFor=""
          >
            Cor
          </label>
          <input
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px]"
            htmlFor=""
          >
            Valor
          </label>
          <input
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px] "
            htmlFor=""
          >
            Status
          </label>
          <select className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]">
            <option value="Em estoque">Em estoque</option>
            <option value="Sem estoque">Sem estoque</option>
          </select>
        </div>
        <Btn
          height="h-[45px]"
          width="w-[418px]"
          btnHandler={btnHandleFunction}
          type="submit"
          text={btnName}
          icon={icon}
        />
      </form>
    </section>
  );
};

export default RegisterForm;
