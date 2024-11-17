import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getData } from "../services/handleData";

export const ContextList = createContext();
export function ContextComponent({ children }) {
  const [valueContext, setValueContext] = useState(false);
  const [updateContext, setUpdateContext] = useState(false);
  const value = { valueContext, setValueContext, setUpdateContext };
  useEffect(() => {
    getData(setValueContext);
  }, [updateContext]);
  if (!valueContext) {
    return null;
  }

  return <ContextList.Provider value={value}>{children}</ContextList.Provider>;
}
