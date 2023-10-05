import { Button, TextField, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Header from './Header'

const LoginForm = () => {
  return (
   <>
    <Header/>
<Toolbar></Toolbar>
    <Container sx={{mt:"20px",justifyContent:"center"}}>
        <form>
            <TextField 
                label="Email Address"
                margin='dense'
                fullWidth
            />
             <TextField 
                label="Password"
                margin='dense'
                fullWidth
            />
            <Button sx={{mt:'10px'}} variant="contained">Login</Button>
        </form>
    </Container>
   </>
  )
}

export default LoginForm