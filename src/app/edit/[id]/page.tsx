import PageTitle from "@/components/PageTitle";
import Form from "@/components/Form";
import { ParamsProps } from "@/interfaces";
import attIcon from "../../../../public/icons/att.svg";

const Edit = ({ params }: ParamsProps) => {
  const idMoto = params.id;
  console.log(idMoto);

  return (
    <main>
      <div className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Editar" />
      </div>
      <Form
        title="Edite as informações que preferir! 📝"
        icon={attIcon}
        btnName="atualizar"
      />
    </main>
  );
};

export default Edit;
