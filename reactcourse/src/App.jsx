import { useState } from "react";
function App() {
 let [counter,setCounter]=useState(0);
  const Addvalue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const RemoveValue=()=>{
    counter=counter-1;
    setCounter(counter);
  }
  return (
    <>
<h1>Welcome To Counter App </h1>
<h2> Counter Value = {counter}</h2>
<div>
  <button onClick={Addvalue}> Increment</button>
</div>
<button onClick={RemoveValue}> Decrement</button>
    </>
  )
}
export default App
