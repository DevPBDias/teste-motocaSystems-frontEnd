import Btn from "@/components/Btn";
import PageTitle from "@/components/PageTitle";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <section>
      <PageTitle title="Tabela de Motos" />
      <div>
        <SearchInput />
        <Btn text="novo registro" />
      </div>
    </section>
  );
}
