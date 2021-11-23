import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import Fade from "react-reveal/Fade";
import Navbar from "./components/Navbar.js"

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{ height: "100%" }}>
    <Navbar />
      {inCall ? (
    
        <VideoCall setInCall={setInCall} />
       
      ) : (
        <div class="w-full min-h-screen bg-random flex items-center justify-center px-5 py-5">
        <div class="w-full mx-auto rounded-3xl shadow-xl bg-white" style={{maxWidth: "300px"}}>
            <div class="w-full px-5 pt-8 pb-3">
                <div class="rounded-full w-44 h-44 mx-auto border-8 border-gray-300 flex items-center justify-center">
                  <p className="text-2xl text-yellow-300">GetBee</p>
                    <i class="mdi mdi-arrow-down text-8xl text-black leading-none"></i>
                </div>
            </div>
            <div class="w-full px-5 text-center pb-8 border-b border-gray-300">
                <h1 class="text-2xl font-light text-gray-800 leading-tight">Welcome</h1>
                <p class="text-xs text-gray-500">Start shopping with a professional assistant</p>
            </div>
  
            <div class="w-full px-5 py-5 text-center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInCall(true)}
            >
              Join Call
            </Button>    
                </div>
        </div>
    </div>

  
      )}
      </div>
  );
}

export default App;
