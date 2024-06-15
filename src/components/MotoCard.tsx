import Image from "next/image";
import trashIcon from "../../public/icons/trash.svg";
import eyeIcon from "../../public/icons/eye.svg";
import { DataProps } from "@/interfaces";

const MotoCard = ({ moto }: any | DataProps) => {
  return (
    <div>
      <div>
        <p>#{moto?.id}</p>
        <div>
          <div>
            <p>{moto?.name}</p>
            <p>{moto?.status}</p>
          </div>
          <p>Valor: R$ {moto?.value}</p>
          <p>Cor: {moto?.color}</p>
        </div>
      </div>
      <div>
        <button type="button">
          <Image src={trashIcon} alt="trash Icon" />
        </button>
        <button type="button">
          <Image src={eyeIcon} alt=" eyeIcon" />
        </button>
      </div>
    </div>
  );
};

export default MotoCard;
