import Image from "next/image";
import Link from "next/link";
import plusIcon from "../../public/icons/plus.svg";

interface BtnProps {
  text: string;
}

const Btn = ({ text }: BtnProps) => {
  return (
    <Link href="/register">
      <Image src={plusIcon} alt="plus icon" />
      <p>{text}</p>
    </Link>
  );
};

export default Btn;
