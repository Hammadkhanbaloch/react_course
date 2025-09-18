import { useState } from "react";
function App() {
 let [darkmode,setDarkMode]=useState(false);

  const themeChanger=()=>{
    setDarkMode(!darkmode);
  }
  return (
    <>
    < div style={
      {backgroundColor: darkmode ? "#333":"#fff",
        color:darkmode ? "#fff":"#000",
        height:"100vh",
        padding:"20px"
      }
    }>
 <h1>Welcome To ThemeColor Switcher </h1>
<button onClick={themeChanger}>
  Switch to {darkmode ? 'Light' : 'Dark'} Mode
</button>
    </div>
    </>
  )
}
export default App
