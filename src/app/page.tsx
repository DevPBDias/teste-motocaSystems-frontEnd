"use client";

import Btn from "@/components/Btn";
import MotoCard from "@/components/MotoCard";
import PageTitle from "@/components/PageTitle";
import { DataProps } from "@/interfaces";
import plusIcon from "../../public/icons/plus.svg";
import { getData } from "@/utils/fetchFunctions";
import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";

export default function Home() {
  const [motos, setMotos] = useState<DataProps[] | []>([]);

  useEffect(() => {
    const showDataMotos = async () => {
      setMotos(await getData());
    };
    showDataMotos();
  }, []);

  return (
    <main>
      <section className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Tabela de Motos" />
        <section className="flex flex-row gap-4">
          <SearchInput motos={motos} setMotos={setMotos} />
          <Btn
            type="button"
            route="/register"
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
            <MotoCard
              key={moto.id}
              moto={moto}
              motos={motos}
              setMotos={setMotos}
            />
          ))}
      </section>
    </main>
  );
}
