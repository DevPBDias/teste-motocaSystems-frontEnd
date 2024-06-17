"use client";
import Image from "next/image";
import { useState } from "react";
import searchIcon from "../../public/icons/search.svg";
import { DataProps } from "@/interfaces";

const SearchInput = ({ motos, setMotos }: any) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchMotos = (value: string) => {
    const foundMoto = motos.filter(
      (item: DataProps) =>
        item.color.toLowerCase().includes(value.toLowerCase()) ||
        item.model.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toLowerCase().includes(value.toString())
    );
    if (foundMoto) setMotos(foundMoto);
  };

  const handleChange = ({ target }: any) => {
    setSearchValue(target.value);
    searchMotos(searchValue);
  };

  return (
    <form className="relative border-[--text-white] border-2 rounded-[5px] h-[35px] w-[385px]">
      <input
        type="text"
        placeholder="Buscar por código, nome e cor"
        value={searchValue}
        onChange={handleChange}
        className="bg-[--bg-primary] rounded-[5px] h-full w-full text-[11px] leading-4 pl-12 font-normal placeholder:text-[11px] placeholder:leading-4 placeholder:font-normal"
      />
      <Image
        className="absolute top-2 left-3"
        src={searchIcon}
        alt="search icon"
      />
    </form>
  );
};

export default SearchInput;
