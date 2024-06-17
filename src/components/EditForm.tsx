"use client";

import { DataProps, FormProps } from "@/interfaces";
import Btn from "./Btn";
import PageTitle from "./PageTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { editData, getDataById } from "@/utils/fetchFunctions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const motoSchema = z.object({
  id: z.string(),
  model: z.string(),
  color: z.string(),
  price: z.string(),
  status: z.string(),
});

const Form = ({ title, icon, btnName, idMoto }: any | FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({ resolver: zodResolver(motoSchema) });

  const router = useRouter();

  const [motoInfo, setMotoInfo] = useState<any>();

  useEffect(() => {
    async function getInfo() {
      const data = await getDataById(idMoto);
      setMotoInfo(data);
    }
    getInfo();
  }, [idMoto]);

  const onSubmit = async (data: DataProps) => {
    await editData(idMoto, data);
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center mt-20 gap-12">
      <PageTitle title={title} />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px]"
            htmlFor=""
          >
            Código
          </label>
          <input
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
            {...register("id")}
            placeholder="#"
            defaultValue={motoInfo?.id}
          />
          {errors.id && <span>{errors.id.message}</span>}
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
            {...register("model")}
            defaultValue={motoInfo?.model}
          />
          {errors.model && <span>{errors.model.message}</span>}
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
            {...register("color")}
            defaultValue={motoInfo?.color}
          />
          {errors.color && <span>{errors.color.message}</span>}
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
            {...register("price")}
            defaultValue={motoInfo?.price}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div className="relative rounded-[5px] border-2 border-[--text-white] h-[50px] w-[419px]">
          <label
            className="absolute bg-[--bg-primary] top-[-11px] left-4 px-2 text-[13px] leading-[19.5px] "
            htmlFor=""
          >
            Status
          </label>
          <select
            {...register("status")}
            defaultValue={motoInfo?.status}
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
          >
            <option value="Em estoque">Em estoque</option>
            <option value="Sem estoque">Sem estoque</option>
          </select>
        </div>
        <Btn
          height="h-[45px]"
          width="w-[418px]"
          route="/"
          type="submit"
          text={btnName}
          icon={icon}
        />
      </form>
    </section>
  );
};

export default Form;
