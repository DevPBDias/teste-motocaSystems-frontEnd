import Btn from "@/components/Btn";
import MotoCard from "@/components/MotoCard";
import PageTitle from "@/components/PageTitle";
import SearchInput from "@/components/SearchInput";
import { DataProps } from "@/interfaces";

async function getData() {
  const res = await fetch("http://localhost:8000/motorcycles");

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

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
