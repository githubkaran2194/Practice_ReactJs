import { Box, Button, Container, Table, TextField } from '@mui/material'
import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        username: '', password: '', email: ''
    });

    // submit btn
    const [submit, setSubmit] = useState([])

    const handleChange = ((e) => {
        const { name, value } = e.target;
        setUser((user) => {
            return { ...user, [name]: value }
        })
        console.log(user)
    })

    const handleSubmit = ((e) => {
        e.preventDefault();
       setSubmit([...submit, user]);
       setUser({
        username:'',password:'',email:''
       })
    })
    return (
        <>
            <Container sx={{ mt: '20px' }}>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <TextField type="text" name='username' placeholder='Name' variant='standard' fullWidth margin='dense' value={user.username} onChange={handleChange} />
                        <TextField type="email" name='email' placeholder='Email' variant='standard' fullWidth margin='dense' value={user.email} onChange={handleChange} />
                        <TextField type="password" name='password' placeholder='Password' variant='standard' fullWidth margin='dense' value={user.password} onChange={handleChange} />
                        <Button variant='outlined' type='submit' sx={{ mt: "10px" }}>Submit</Button>
                    </form>
                </Box>
            </Container>

            {
                submit.map((item, index) => {
                    return (
                        <>
                            <ol>
                                <li>{index}.Username:{item.username}</li>
                                <li>Password:{item.password}</li>
                                <li>email : {item.email}</li>
                            </ol>
                        </>
                    )
                })
            }
        </>
    )
}

export default Form