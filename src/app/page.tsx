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
      <PageTitle title="Tabela de Motos" />
      <div>
        <SearchInput />
        <Btn text="novo registro" />
      </div>
      <section>
        {data.map((moto: DataProps) => (
          <MotoCard key={moto.id} moto={moto} />
        ))}
      </section>
    </main>
  );
}
