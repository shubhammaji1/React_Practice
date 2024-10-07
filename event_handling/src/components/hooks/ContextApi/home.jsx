import { useContext } from "react";
import { BioContext, useBioContext } from ".";

export const Home=()=>{
    // const {myName,myRoll}  = useContext(BioContext);
    const {myName,myRoll}  = useBioContext();
    return(
        <h1>Hello Context Api, My name is {myName} and roll is {myRoll}</h1>
    );

}