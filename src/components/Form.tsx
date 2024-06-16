"use client";

import { DataProps, FormProps } from "@/interfaces";
import Btn from "./Btn";
import PageTitle from "./PageTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createData } from "@/utils/fetchFunctions";

const motoSchema = z.object({
  id: z.string(),
  model: z.string(),
  color: z.string(),
  price: z.string(),
  status: z.string(),
});

const Form = ({ title, icon, btnName, btnHandleFunction }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<DataProps>({ resolver: zodResolver(motoSchema) });

  const resetForm = () => {
    if (isSubmitSuccessful) {
      reset({
        id: "",
        model: "",
        color: "",
        price: "",
        status: "",
      });
    }
  };

  const onSubmit = async (data: DataProps) => {
    createData(data);
    resetForm();
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
            className="bg-[--bg-primary] h-full w-full pl-5 text-[13px] leading-[19.5px]"
          >
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

export default Form;
