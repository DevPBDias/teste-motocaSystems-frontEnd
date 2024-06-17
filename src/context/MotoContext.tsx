"use client";

import { createContext, useEffect, useState } from "react";
import { getData } from "../utils/fetchFunctions";

interface IMotoContextType {
  motos: any;
  setMotos: React.Dispatch<React.SetStateAction<any>>;
}

export const MotoContext = createContext({} as IMotoContextType);

export default function MotosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [motos, setMotos] = useState<any>([]);

  useEffect(() => {
    async function savingData() {
      const data = await getData();
      setMotos(data);
    }
    savingData();
  }, []);

  const contextValue = {
    motos,
    setMotos,
  };

  return (
    <MotoContext.Provider value={contextValue}>{children}</MotoContext.Provider>
  );
}
