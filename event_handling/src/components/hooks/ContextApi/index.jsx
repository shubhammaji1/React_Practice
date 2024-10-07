import { createContext, useContext } from "react";


export const BioContext = createContext();

export const BioProvider =({children})=>{
    const myName ="Shubham"
    const myRoll = 22
    return(
    <BioContext.Provider value={{myName:myName,myRoll:myRoll}}>
        {children}
    </BioContext.Provider>);
};

export const useBioContext =()=>{
    const context = useContext(BioContext);
    return context;
}