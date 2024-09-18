import React from 'react';
import "./evh.css";
const handleButtonClicked=(e)=>{
    console.log(e); 
    alert("Button Clicked");
}
const handleUser=(user)=>{
    console.log(`Welcome back ${user} :)`);
}
export const Eventhandling = () => {
    return (
        <>
            <button onClick={handleButtonClicked}>click meee!!!</button> {/*function components with name function*/}
            <button onClick={()=>handleButtonClicked()}>click meee 2 !!!</button>
            <button onClick={()=>handleUser("Shubo")}>user</button>
        
        
        </>
    );
}


