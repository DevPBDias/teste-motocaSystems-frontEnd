import PageTitle from "@/components/PageTitle";
import Form from "@/components/Form";
import plusIcon from "../../../public/icons/plus.svg";

const Register = () => {
  return (
    <main>
      <div className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Registro de Motos" />
      </div>
      <Form
        title="Preencha as informações a baixo para registrar uma Moto 🏍️"
        icon={plusIcon}
        btnName="registrar"
      />
    </main>
  );
};

export default Register;
