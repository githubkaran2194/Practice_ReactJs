import { Button, Table, TableHead, TableRow, TableBody, TableContainer, Dialog, Paper, Rows } from '@mui/material'
import { Box, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
const TodoList = () => {

    const [cities, setCities] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


useEffect(() => {
const StoreUser = JSON.parse(localStorage.getItem('cities'));
if(StoreUser){
setCities(StoreUser)
}
}, [])

useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
}, [cities]);

    const [open, setOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cities)
        if (user.name.trim() !== '' && user.email.trim() !== '') {
            setCities([...cities, user])
            setUser({
                name: '',
                email: '',
            })
            setOpen(false);
        }
    }

    const removeButton = (index) => {
        const updateCity = [...cities]
        updateCity.splice(index, 1);
        setCities(updateCity)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }))
    }
    const style = {
        padding: '20px'
    }
    return (
        <>
            <Box sx={{ m: "80px" }}>
                <Button onClick={() => setOpen(true)}>Add User Here</Button>
                <Dialog open={open} onClose={() => setOpen(false)} >
                    <Paper sx={style}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Add Name"
                                name="name"
                                fullWidth
                                margin='dense'
                                value={user.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Add Email"
                                name="email"
                                type="email"
                                fullWidth
                                margin='dense'
                                value={user.email}
                                onChange={handleChange}
                            />
                            <br />
                            <Button type="submit" variant="contained">Add user</Button> &nbsp;
                            <Button type="submit" variant="outlined" color='error' onClick={()=>setOpen
                            (false)}>close</Button>
                        </form>
                    </Paper>
                </Dialog>
            </Box>


            <TableContainer component={Paper} sx={{p:"20px", width:"80%"}}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Remove</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cities.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.email}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                 <Button onClick={removeButton}>Remove</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
     </>
    )
}

export default TodoList