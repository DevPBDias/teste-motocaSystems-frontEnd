import PageTitle from "@/components/PageTitle";
import RegisterForm from "@/components/RegisterForm";
import { ParamsProps } from "@/interfaces";

const Edit = ({ params }: ParamsProps) => {
  const idMoto = params.id;
  console.log(idMoto);

  return (
    <main>
      <div className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Editar" />
      </div>
      <RegisterForm title="Edite as informações que preferir! 📝" />
    </main>
  );
};

export default Edit;
