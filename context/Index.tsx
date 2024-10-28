"use client";

import { AccountProps, ChildrenProps, ContextType } from "@/types/type";
import { createContext, useContext, useState } from "react";

// Kontekst yaratish
export const Context = createContext<ContextType | null>(null);

const GlobalContext = ({ children }: ChildrenProps) => {
  const [account, setAccount] = useState<AccountProps | null>(null);

  return (
    <Context.Provider value={{ account, setAccount }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useGlobalContext must be used within a GlobalContext");
  }
  return context;
};
