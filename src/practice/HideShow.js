import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const HideShow = () => {
    const [show, setShow]=useState(true);
    const handleShow=()=>{
        setShow(!show)
    }
  return (
    <Box sx={{ml:"50px"}}>
        <Button onClick={handleShow}>
            Hide / Show
        </Button>

        {
            show ? <h1>HELLO KARAN </h1> : null
        }
    </Box>
  )
}

export default HideShow