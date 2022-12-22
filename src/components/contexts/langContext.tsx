import { createContext, useContext } from "react";

export const LangContext = createContext<any>({});

export const useLangContext = useContext(LangContext);


