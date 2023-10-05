import { Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Counter() {
  const [countData, setCountData] = useState(0);
  const [second, setSecond] = useState(10);

  const handlePlus = () => {
    setCountData(countData + 1);
    if(countData > 19 || second > 7){
        alert('Game Over');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [second]);

  return (
    <Box sx={{padding:"20px"}}>
    <p>After 7 Second showing + is start</p>
      <h1>count: {countData}</h1>
      <br />
      <h3>Time Left: {second} Seconds</h3>
      <br />
     {
        second > 0 ?  <Button variant="contained" onClick={handlePlus}>+</Button> : <h2>Time Over</h2>
     }
    </Box>
  );
}
