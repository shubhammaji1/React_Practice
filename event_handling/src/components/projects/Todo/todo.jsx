import { useEffect, useState } from "react";
import "./todo.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";
export const Todo=()=>{
    const [inputValue, setInputValue] = useState("");
    const [task,setTask] = useState([]);
    const [dateTime,setDateTime ] = useState("");


    const handleInputChange = (value)=>{
            setInputValue(value);
    };
    const handleFormSubmit =(event)=>{
        event.preventDefault();
        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prevtask)=>[...prevtask,inputValue]);
        setInputValue("")

    };
    useEffect(()=>{
        const interval= setInterval(() => {
            const now = new Date();
            const getFormatedDate = now.toLocaleDateString();
            const getFormatedTime = now.toLocaleTimeString();
            setDateTime(`${getFormatedDate}-${getFormatedTime}`);
        },1000);

        return ()=> clearInterval(interval);

    });
    //  Delete Element from list
    
    const handleDeleteElement =(value)=>{
        const updatetask = task.filter((curr)=>curr !== value);
        setTask(updatetask);
    };

    const handleClearAll =()=>{
        setTask([]);
    }
    

  
    return(
        <section className="todo-container">
            <header>    
                <h1>Todo List</h1>
                <h3 className="date-time">{dateTime}</h3>
            </header>
        <section className="form" >
            <form onSubmit={handleFormSubmit}>
                <div>
                <input 
                type="text" 
                className="todo-input" 
                autoComplete="off" 
                value={inputValue} 
                onChange={(event)=>handleInputChange(event.target.value)}
                />
                </div>
                <div>
                <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((curr,index)=>{
                        return <li key={index} className="todo-item">
                            <span>{curr}</span>
                            <button className="check-btn">
                                <MdCheck/>
                                </button>
                            <button onClick={()=>handleDeleteElement(curr)} className="delete-btn">
                            <MdDeleteForever/>
                            </button>
                        </li>

                    })
                }

            </ul>
        </section>
        <section className="clear-btn" onClick={handleClearAll}>
            Clear All
        </section>


        </section>


    );
}