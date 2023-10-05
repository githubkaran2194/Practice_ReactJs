import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormLogin = () => {
    const [admin, setAdmin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setAdmin((admin)=>{
        return { ...admin, [name]:value }
      })
    }


    const [data, setData]=useState([]);
    const handleSubmit=(e)=>{
       e.preventDefault();
       setData([...data, admin]);
       setAdmin({
        email:'',
        password:''
       })
       console.log(admin);
    }
    return (
        <>
            <Box sx={{ m: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin='dense'
                        name='email'
                        type="email"
                        variant='outlined'
                        value={admin.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="password"
                        fullWidth
                        margin='dense'
                        name='password'
                        type="password"
                        variant='outlined'
                        value={admin.password}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant='outlined' sx={{ mt: "10px" }}>Submit Data</Button>
                </form>
            </Box>


            {
                data.map((item, index)=>{
                    return(
                        <>
                            <ol>
                                <li >{index} {item.email}</li>
                                <li>{item.password}</li>
                            </ol>
                        </>
                    )
                })
            }
        </>
    )
}

export default FormLogin
