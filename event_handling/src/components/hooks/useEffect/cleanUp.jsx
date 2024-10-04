import { useState,useEffect } from "react";
import "./index.css"

export const Cleanup=()=>{
    const [count,setCount] = useState(65489);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000);

        return()=> clearInterval(timer);
    },[]);
    return(
        <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
    );
}