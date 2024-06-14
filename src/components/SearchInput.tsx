import Image from "next/image";
import searchIcon from "../../public/icons/search.svg";

const SearchInput = () => {
  return (
    <div>
      <input type="text" name="" id="" />
      <Image src={searchIcon} alt="search icon" />
    </div>
  );
};

export default SearchInput;
