"use client";

import Btn from "@/components/Btn";
import MotoCard from "@/components/MotoCard";
import PageTitle from "@/components/PageTitle";
import SearchInput from "@/components/SearchInput";
import { DataProps } from "@/interfaces";
import { getData } from "@/utils/fetchFunctions";
import plusIcon from "../../public/icons/plus.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [motos, setMotos] = useState<DataProps[] | []>([]);

  useEffect(() => {
    const showDataMotos = async () => {
      setMotos(await getData());
    };
    showDataMotos();
  }, []);

  const handleClick = () => {
    router.push("/register");
  };

  return (
    <main>
      <section className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Tabela de Motos" />
        <section className="flex flex-row gap-4">
          <SearchInput />
          <Btn
            type="button"
            btnHandler={handleClick}
            text="novo registro"
            width="w-[142px]"
            height="h-[34px]"
            icon={plusIcon}
          />
        </section>
      </section>
      <section>
        {motos &&
          motos.map((moto: DataProps) => (
            <MotoCard key={moto.id} moto={moto} />
          ))}
      </section>
    </main>
  );
}
