import React, { useState } from 'react';

export const States = () => {
    const [count,setCount] = useState(0);
    const handleButtonClick=()=>{
       setCount(()=>count+1)
    };
    return (
        <>
        <section className='main-div'>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Click me</button>
        </section>
        <ChildCom count={count}/>
        </>

        
    );
};

function ChildCom({count}){
    console.log("Child Component Render");
    return <div>
        <h2>Child Component-{count}</h2>
    </div>
    
}

