import "./index.css"
import {useRef} from "react";
export const UseRef=()=>{
    const username = useRef(null);
    const password = useRef(null);
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    };
   return(
    <form onSubmit={handleOnSubmit}>
    <input type="text" id="username" ref={username} />
    <br />
    <br />
    <input type="text" id="password" ref={password}/>
    <br />
    <br />
    <button>Submit</button>
    </form>
   );
}