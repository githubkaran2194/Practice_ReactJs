import { Menu } from '@mui/icons-material'
import { Box, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'

const SlideDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }
    const handleClose = () =>{
        setOpen(false)}
    
    return (
        <>
            <Box>
                <h1>SlideDrawer</h1>
                <Button variant='contained' onClick={() => setOpen(true)}>
                    <Menu />
                </Button>
                <Box >
                <Drawer
                sx={{width:"250px"}}
                    open={open}
                    onClick={handleToggle}
                    onClose={handleClose}
                    anchor="left"
                    
                >
                    <ul style={{width:"200px", justifyContent:"center", alignItems:"center"}}>
                        <li style={{textAlign:"center"}}><a  href="#home">Home</a></li><br/>
                        <li style={{textAlign:"center"}}><a  href="#news">News</a></li><br/>
                        <li style={{textAlign:"center"}}><a  href="#contact">Contact Us</a></li><br/>

                    </ul>

                </Drawer>
                </Box>

            </Box>
        </>
    )
}

export default SlideDrawer