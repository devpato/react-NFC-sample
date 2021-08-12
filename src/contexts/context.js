import { createContext } from "react";

export const ActionsContext = createContext(
    {
        scan: null,
        write: null,
        setActions:()=>{}
    }
);