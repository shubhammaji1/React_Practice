import { useState } from "react";
import "./todo.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";
export const Todo=()=>{
    const [inputValue, setInputValue] = useState("");
    const [task,setTask] = useState([]);
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
    return(
        <section className="todo-container">
            <header>    
                <h1>Todo List</h1>
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
                            <button className="delete-btn">
                            <MdDeleteForever/>
                            </button>
                        </li>

                    })
                }

            </ul>
        </section>


        </section>


    );
}