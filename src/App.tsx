import { useEffect } from "react";
import { useConfigContext } from "./context/appcontext";
import { Introduction, Navbar, About, Contact, Projects } from "./components";

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
    <div className={`flex justify-center items-center w-full min-h-screen  `}>
      <div className="flex justify-center">
        <div className='w-full sm:w-9/12'>
          <Navbar>
            <div><Introduction/></div>
            <div><About/></div>
            <div><Projects/></div>
            <div><Contact/></div>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default App;
