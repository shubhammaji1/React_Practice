import { forwardRef, useId, useRef } from "react";
import "./index.css";

export const ForwardRef=()=>{

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(username.current.value, password.current.value);

    }
    return(
        // <form onSubmit={handleFormSubmit}>
        //     <BeforeReact19Input label="username" ref={username} />
        //     <br />
        //     <BeforeReact19Input label="password" ref={password} />
        //     <br />
        //     <button>Submit</button>
        // </form>
        <form onSubmit={handleFormSubmit}>
            <AfterReact19Input label="username" ref={username} />
            <br />
            <AfterReact19Input label="password" ref={password} />
            <br />
            <button>Submit</button>
        </form>
    );
};

// const BeforeReact19Input = forwardRef((props, ref)=>{
//     const id = useId();
//     return(

//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" ref={ref} />
//         </div>
//     );
// })

// After React 19
const AfterReact19Input = ({label,ref})=>{
    const id = useId();
    return(

        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    );
};