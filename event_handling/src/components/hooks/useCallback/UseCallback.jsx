import { memo, useCallback, useState } from "react"

const Button= memo(({onClick,children})=>{
    console.log(`Rendering Button ${children}`);
    return(
        <button onClick={onClick}>{children}</button>

    );

});

export default function UseCallback(){
    const [count,setCount] = useState(0);


    const increment = useCallback(()=>{
        console.log("Increment Inside");
        setCount((prev)=>prev+1);
    },[]);

    const decrement = useCallback(()=>{
        console.log("Decrement Inside");
        setCount((prev)=>prev-1);
    },[]);
    
    return(
        <div>
            <h1>Count:{count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );

}