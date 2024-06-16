import Image from "next/image";
import homeIcon from "../../public/icons/home.svg";
import userImg from "../../public/icons/user.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="icons-header-container">
        <Link href="/">
          <Image src={homeIcon} alt="home icon" />
        </Link>
        <Image src={userImg} alt="user image" />
      </div>
    </header>
  );
};

export default Header;
