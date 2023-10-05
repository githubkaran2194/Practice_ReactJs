import { Box, Button, Container, ListItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CreateForm1 = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [userData, setUserData]=useState([]);


    
    const handleChange = ((e) => {
        const { name, value } = e.target;
        setUser((user) => ({
          ...user,
          [name]: value,
        }));
    })

    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(user);
        setUserData([...userData, user]);
        setUser({
          name: '',
          email: '',
          password: '',
        });
    })
    return (
        <>
            <Container maxWidth="md">
                <Box sx={{
                    padding: "20px",
                    mt: "20px",
                    boxShadow: "0 0 5px ",
                    borderRadius: "10px",
                }}>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant='standard'
                            label="Enter Your Name"
                            name='name'
                            margin='dense'
                            fullWidth
                            type="text"
                            value={user.name}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='standard'
                            label="Enter Your Email"
                            name='email'
                            type="email"
                            margin='dense'
                            fullWidth
                            value={user.email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='standard'
                            label="Enter Your Password"
                            name='password'
                            type="password"
                            margin='dense'
                            fullWidth
                            value={user.password}
                            onChange={handleChange}
                        />
                        <Button variant='outlined'
                        type='submit'
                         sx={{ marginTop: "10px" }}>Submit Data</Button>
                    </form>
                </Box>
            </Container>

{
    userData.map((item, id)=>{
        return(
            <>
               <p key={id}>{item.name}</p>
               <p>{item.email}</p>
               <p>{item.password}</p>
            </>
        )
    })
}
        </>
    )
}

export default CreateForm1