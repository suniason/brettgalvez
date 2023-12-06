import { useEffect } from "react";
import { useConfigContext } from "./context/appcontext";
import { Introduction, Navbar, Skills, Contact, Projects } from "./components";

function App() {
  const bodytag = document.body;
  const {darkMode} = useConfigContext()

  useEffect(()=>{
    if(darkMode){
      bodytag.classList.add("dark")
    }else{
      bodytag.classList.remove("dark") 
    }
  },[darkMode, bodytag.classList])

  return (
    <div className={`flex justify-center items-center w-full min-h-screen`}>
      <div className="flex justify-center">
          <Navbar>
            <div><Introduction/></div>
            <div><Skills/></div>
            <div><Projects/></div>
            <div><Contact/></div>
          </Navbar>
      </div>
    </div>
  );
}

export default App;
