import Btn from "@/components/Btn";
import MotoCard from "@/components/MotoCard";
import PageTitle from "@/components/PageTitle";
import SearchInput from "@/components/SearchInput";
import { DataProps } from "@/interfaces";
import { getData } from "@/utils/fetchFunctions";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <section className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Tabela de Motos" />
        <section className="flex flex-row gap-4">
          <SearchInput />
          <Btn text="novo registro" width="w-[142px]" height="h-[34px]" />
        </section>
      </section>
      <section>
        {data.map((moto: DataProps) => (
          <MotoCard key={moto.id} moto={moto} />
        ))}
      </section>
    </main>
  );
}
