import PageTitle from "@/components/PageTitle";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <main>
      <div className="flex flex-row gap-4 py-5 w-full justify-between border-b-[1px] border-[--text-white]">
        <PageTitle title="Registro de Motos" />
      </div>
      <RegisterForm title="Preencha as informações a baixo para registrar uma Moto 🏍️" />
    </main>
  );
};

export default Register;
