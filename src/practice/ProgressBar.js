import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

useEffect(()=>{
    if(progress > 100){
        alert("max Progress is 100")
        setProgress(100)
    }
})

  return (
    <div>
      <h2>Progress: {progress}%</h2>
      <progress max="100" value={progress}></progress>
     <TextField label="Your Progress " type="text"  onChange={(e)=>setProgress(e.target.value)}/>
    </div>
  );
}

export default ProgressBar;
