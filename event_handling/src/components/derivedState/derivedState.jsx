import { useState } from "react"

export const DerivedState =()=>{
    const [users,setUser] = useState([
        {name : "S", age: 22},
        {name : "U", age: 23},
        {name : "B", age: 24},
    ]);
    const userCount = users.length;
    const userAvg = users.reduce((accum,curr)=>accum+curr.age,0)/userCount;
     return(
        <div>
            <h1>User Details</h1>
            <ul>
                {users.map((user,index)=>{
                     return (<li key={index}>
                     {user.name} - {user.age} old
                 </li>);
                })}
            </ul>
            <p>user Count - {userCount}</p>
            <p>user Avg - {userAvg}</p>
        </div>
    );
    
}

