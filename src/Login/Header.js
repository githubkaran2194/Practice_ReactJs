import { AppBar, Button, Container, Modal, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [open, setOpen]=useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40px',
        height:'40px',
        margin:"auto",
        bgcolor: 'background',
        border: '2px solid grey',
        boxShadow: '0 0 5px',
        p: 4,
      };
  return (
   <>
    <Container>
        <AppBar>
            <Toolbar>
                <Typography variant='h5' component={'div'} sx={{flexGrow: 1}}>BlackBox</Typography>
                <Typography onClick={()=>setOpen(true)}>User Name</Typography>
                <Link style={{textDecoration:"none"}} to={"/login"}>
                    <Modal open={open}
                    sx={style}
                    onClose={()=>setOpen(!open)}
                    aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                    ><Button color="inherit" variant='contained'>Login</Button></Modal>
                </Link>
            </Toolbar>
        </AppBar>
    </Container>
   </>
  )
}

export default Header