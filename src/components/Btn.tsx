import Image from "next/image";
import Link from "next/link";
import plusIcon from "../../public/icons/plus.svg";
import { BtnProps } from "@/interfaces";

const Btn = ({ text, width, height, route }: BtnProps) => {
  return (
    <Link
      href={route}
      className={`${width} ${height} bg-[--btn-bg] flex flex-row items-center justify-center gap-2 rounded-[5px]`}
    >
      <Image src={plusIcon} alt="plus icon" />
      <p className="text-[12px] font-semibold uppercase leading-[18px]">
        {text}
      </p>
    </Link>
  );
};

export default Btn;
