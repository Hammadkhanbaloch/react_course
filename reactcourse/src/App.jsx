import { useState } from "react";
function App() {
 let [task,setTask]=useState([]);
 let [input,setInput]=useState("");
  const AddTask=(e)=>{
    e.preventDefault();
    setTask([...task,input]);
    setInput("");
  }
  return (
    <>
<h1>Welcome To Task Manager </h1>
<input type ="text" placeholder="Enter the task" value={input} onChange={(e)=>setInput(e.target.value)} />
  <button onClick={AddTask}> Add Task</button>
   <h2>Added Tasks:</h2>
   <ol>
    {task.map((e,index)=>(
      <li key={index}>{e}</li>))}
   </ol>
    </>
  )
}
export default App
