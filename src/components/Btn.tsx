"use client";
import Image from "next/image";
import { BtnProps } from "@/interfaces";
import { useRouter } from "next/navigation";

const Btn = ({ text, width, height, icon, route }: BtnProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
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
