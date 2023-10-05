import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Form = () => {
    const [user, setUser] = useState({
        username: "",
        fullname: "",
        age: ""
    })

    const [data, setData] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((user) => ({ ...user, [name]: value }))
        console.log(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       if(user.username.trim() !== '' && user.fullname.trim() !== '' && user.age.trim() !== ''){
        setData([...data, user])
        setUser({
            username: '', fullname: '', age: ''
        })
       }
    }

    const removeUser =(index)=>{
      const removeUserHere = [...data];
      removeUserHere.splice(index,1);
      setData(()=>removeUserHere)}
    return (
        <Box sx={{ padding: "20px", width: "50%" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="UserName"
                    fullWidth
                    margin='dense'
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <TextField
                    label="FullName"
                    fullWidth
                    margin='dense'
                    name="fullname"
                    value={user.fullname}
                    onChange={handleChange}
                />
                <TextField
                    label="Age"
                    fullWidth
                    margin='dense'
                    value={user.age}
                    name="age"
                    onChange={handleChange}
                />

                <Button type='submit'>Submit</Button>
            </form>


            <TableContainer>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">FullName</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell align="right">{user.fullname}</TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell align="right">
                <Button onClick={()=>removeUser(index)}>Remove</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
    )
}

export default Form