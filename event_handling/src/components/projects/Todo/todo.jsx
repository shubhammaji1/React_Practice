import { useEffect, useState } from "react";
import "./todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const Todo=()=>{
   
    const [task,setTask] = useState([]);
    const [dateTime,setDateTime ] = useState("");


   
    const handleFormSubmit =(inputValue)=>{

        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prevtask)=>[...prevtask,inputValue]);
        
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
        <TodoForm onAddTodo ={handleFormSubmit}/>
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((curr,index)=>{
                        return (
                            <TodoList key={index} data={curr}
                            onHandleDeleteTodo ={handleDeleteElement}/>
                        );

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