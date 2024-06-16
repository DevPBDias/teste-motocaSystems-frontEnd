"use client";

import Image from "next/image";
import trashIcon from "../../public/icons/trash.svg";
import eyeIcon from "../../public/icons/eye.svg";
import { DataProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import { deleteData } from "@/utils/fetchFunctions";

const MotoCard = ({ moto }: any | DataProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteData(moto.id);
    console.log(" moto deletada");
  };

  return (
    <section className="w-full h-[138px] flex flex-row justify-between items-center bg-[--bg-secondary] rounded-[10px] px-12 my-6">
      <section className="flex flex-row justify-center items-center gap-24 ">
        <p className="text-[--text-purple] font-semibold text-[17px] leading-[25.5px] ">
          #{moto.id}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="font-semibold text-[17px] leading-[25.5px] ">
              {moto.model}
            </p>
            <p className="rounded-[35px] w-[111px] text-[15px] leading-[22.5px] bg-[--status-bg-green] text-[--status-text-green] text-center">
              {moto.status}
            </p>
          </div>
          <p className="text-[15px] leading-[22.5px] font-medium">
            Valor: R$ {moto?.price}
          </p>
          <p className="text-[15px] leading-[22.5px] font-medium">
            Cor: {moto?.color}
          </p>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center gap-4 ">
        <button type="button" onClick={handleDelete}>
          <Image src={trashIcon} alt="trash Icon" />
        </button>
        <button type="button" onClick={() => router.push(`/edit/${moto.id}`)}>
          <Image src={eyeIcon} alt=" eyeIcon" />
        </button>
      </section>
    </section>
  );
};

export default MotoCard;
