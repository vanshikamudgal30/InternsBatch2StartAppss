import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter(){

    const[count,setCount]=useState(0)

    return(
    <div className="container">
        <h1>Counter</h1>
        <div className="display"> 
            <span>{count}</span>
        </div>
        <div className="button-grp">
            <button className="btn inc" onClick={()=>setCount(count+1)}>+</button>
            <button className="btn dec" onClick={()=>setCount(count-1)}>-</button>
            <button className="btn reset" onClick={()=>setCount(0)}>Reset</button>
            
        </div>
     </div>
    )
}

export default Counter