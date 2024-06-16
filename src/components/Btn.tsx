import Image from "next/image";
import { BtnProps } from "@/interfaces";

const Btn = ({ text, width, height, icon, btnHandler }: BtnProps) => {
  return (
    <button
      onClick={btnHandler}
      className={`${width} ${height} bg-[--btn-bg] flex flex-row items-center justify-center gap-2 rounded-[5px]`}
    >
      <Image src={icon} alt={icon} />
      <p className="text-[12px] font-semibold uppercase leading-[18px]">
        {text}
      </p>
    </button>
  );
};

export default Btn;
