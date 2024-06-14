import Image from "next/image";
import homeIcon from "../../public/icons/home.svg";
import userImg from "../../public/icons/user.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="icons-header-container">
        <Image src={homeIcon} alt="home icon" />
        <Image src={userImg} alt="user image" />
      </div>
    </header>
  );
};

export default Header;
