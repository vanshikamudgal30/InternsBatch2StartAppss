import { useEffect, useState } from "react";
import "./App.css";
import deleteIcon from "./close-tab-svgrepo-com.svg";

function App(){
  const[input,setInput]=useState("");  //what user types
  const[list,setList]=useState(()=>{  //store all tasks
   const savedTasks=localStorage.getItem("tasks");
   return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(list));
},[list]);

const handleChange=(e)=>{  //it will run when user will type and will update input state and thus makes input controlled 
  setInput(e.target.value);
};

const handleSubmit=(e)=>{
  e.preventDefault(); //stops page refreshing

  if(input.trim() === "") return;  //avoids empty task

  setList([...list,input]); //add new task to list
  setInput("");   //clears input box
}; 

const handleDelete=(index)=>{  //Removes only the clicked task
  const newList=list.filter((_,i)=> i !==index);   //create new array
  setList(newList);
};

return(
  <div className="App">
    <div className="todo-container">
  <h2>To-Do List</h2>

  <form onSubmit={handleSubmit}>
    <input type="text" value={input} onChange={handleChange} placeholder="Enter task"/>
    <button type="submit">Add</button>
  </form>

  <ul>
    {list.map((item,index)=>(
      <li key={index}>{item}
      <button onClick={()=>handleDelete(index)} className="delte-btn">
        <img src={deleteIcon} alt="delete" className="delete-icon"/>
      </button>
      </li>
    ))}
  </ul>
  </div>
  </div>
);
}
export default App;
