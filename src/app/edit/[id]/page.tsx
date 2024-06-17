import PageTitle from "@/components/PageTitle";
import EditForm from "@/components/EditForm";
import { ParamsProps } from "@/interfaces";
import attIcon from "../../../../public/icons/att.svg";
import { getDataById } from "@/utils/fetchFunctions";

const Edit = async ({ params }: ParamsProps) => {
  const idMoto = params.id;

  return (
    <main>
      <div className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Editar" />
      </div>
      <EditForm
        title="Edite as informações que preferir! 📝"
        icon={attIcon}
        btnName="atualizar"
        idMoto={idMoto}
      />
    </main>
  );
};

export default Edit;
