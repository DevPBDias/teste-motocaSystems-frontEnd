"use client";

import Image from "next/image";
import searchIcon from "../../public/icons/search.svg";
import { useState } from "react";

const SearchInput = () => {
  const [filterInfo, setFilterInfo] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterInfo(event.target.value);
  };

  const handleCLick = (): void => {
    console.log("clickou");
  };

  return (
    <form className="relative border-[--text-white] border-2 rounded-[5px] h-[35px] w-[385px]">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar por código, nome e cor"
        value={filterInfo}
        className="bg-[--bg-primary] rounded-[5px] h-full w-full text-[11px] leading-4 pl-12 font-normal placeholder:text-[11px] placeholder:leading-4 placeholder:font-normal"
        onChange={handleChange}
      />
      <button type="button" onClick={handleCLick}>
        <Image
          className="absolute top-2 left-3"
          src={searchIcon}
          alt="search icon"
        />
      </button>
    </form>
  );
};

export default SearchInput;
