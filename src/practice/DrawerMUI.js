import { Box, Button, Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'

const DrawerMUI = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        open Drawer
      </Button>
      <Drawer variant="temporary"
        anchor={"left"}
        open={open}
        onClose={handleDrawerToggle}
      >
      <Box sx={{ width: 250 }} mx={5} >
      <Typography variant='h5' 
      component="div"
      color="seagreen"
      align='center'
      >
Drawer item
      </Typography>
      <Box>
        <ul className='drawer-menu' style={{textAlign:"center"}}>
          <li style={{listStyle:"none"}}>
            <a href="/" style={{textDecoration:"none"}}>Home</a>
          </li>
          <li style={{listStyle:"none"}}>
            <a href="/" style={{textDecoration:"none"}}>About</a>
          </li>
          <li style={{listStyle:"none"}}>
            <a href="/" style={{textDecoration:"none"}}>Services</a>
          </li>
        </ul>
      </Box>
      </Box>
      </Drawer>
    </>
  )
}

export default DrawerMUI