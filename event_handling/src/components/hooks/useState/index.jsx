import { useState } from "react";



export const Counter = ()=>{
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    return( <>

        <div style={{textAlign: "center", fontSize:"40px"}}>
            <h1>useState Hook</h1>
            <br/>
            <p> count:{count}</p>
            <div>
                <label>
                    step:
                    <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
                </label>
            </div>
            <br />
            <br />
            <button style={{ fontSize:"40px"}} onClick={()=>setCount(count+step)}>Increment</button>
            <br />
            <br />
            <button style={{ fontSize:"40px"}} onClick={()=>setCount(count-step)} disabled={count<=0} >Decrement</button>
            <br />
            <br />
            <button style={{ fontSize:"40px"}} onClick={()=>setCount(0)} >Clear</button>
        </div>

    </>);
}