import React from 'react';

export const EventsProps = () => {

    const handleWelcomeUser =(user)=>{
        alert(`${user},Welcome Back`);
    }
    const handleHover =()=>{
        alert("Hovering successfully");
    }

    return (
        <>
            <WelcomeUser onClick={()=>handleWelcomeUser("Shubham")} 
                onMouseEnter={handleHover}
                />
        
        </>
    );
}


const WelcomeUser =(props)=>{

    const handleGreet=()=>{
        alert("hey, Good Night");
        props.onClick;
    }
    return(<>
    
        <button onClick={props.onClick}>Click me</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={handleGreet}>Greetings</button>

    </>
    )
}

