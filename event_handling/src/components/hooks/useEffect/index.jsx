import { useEffect, useState } from "react";
import "./index.css"

export const ReactUseEffect =()=>{
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Count Value:",count);
    },[count]);
    return(
        <div className="container effect-container">
            <h1>UseEffect Hooks</h1>
            <p>count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            
        </div>
    );
}