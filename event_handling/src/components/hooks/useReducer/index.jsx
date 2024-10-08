import { useReducer } from "react"

export const ReducerComp =()=>{

    const reducer =(state,action)=>{
        if(action.type == "INCREMENT"){
            return state+1;
        }
        if(action.type == "DECREMENT"){
            return state-1;
        }
    };

    const [count,dispatch] = useReducer(reducer,0);

    return(
        <div>
            <h1 style={{ marginTop:"400px", width:"300px"}}>{count}</h1>
            <button onClick={()=> dispatch({type:"INCREMENT"})} style={{backgroundColor : "red", marginTop:"400px", width:"300px"}} >Increment</button>
            <button onClick={()=> dispatch({type:"DECREMENT"})} style={{marginTop:"400px", width:"300px"}}>Decrement</button>
        </div>
        
    );
}