import { useEffect, useRef } from "react";
import { useConfigContext } from "./context/appcontext";
import { Introduction, Navbar, About, Contact, Projects } from "./components";

function App() {
  const bodytag = document.body;
  const {darkMode} = useConfigContext()

  const videoRef = useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(()=>{
    if(darkMode){
      bodytag.classList.add("dark")
    }else{
      bodytag.classList.remove("dark") 
    }
  },[darkMode, bodytag.classList])

  return (
    <div className={`relative flex justify-center items-center w-full min-h-screen ${darkMode?"bg-black bg-opacity-50":""} `}>
      {/* <div className="top-0 bottom-0 flex justify-center items-center absolute -z-10 overflow-hidden w-full h-screen bg-black">
      <video ref={videoRef} src="bgvid.mp4" muted autoPlay loop controls={false} 
      className="min-w-full -z-50 fixed" ></video>
      </div> */}
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
