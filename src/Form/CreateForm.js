import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CreateForm = () => {
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    confirmPassword: '',
    password: '',
  });

  const [userData, setUserData] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, user]);
    setUser({
      fName: '',
      lName: '',
      email: '',
      confirmPassword: '',
      password: '',
    });
  };

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ m: '20px', p: '20px', boxShadow: '0px 0px 5px' }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            variant="h6"
            component={'p'}
          >
            Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Enter Your First Name"
              margin="dense"
              fullWidth
              type="text"
              name="fName"
              value={user.fName}
              onChange={handleInput}
            />
            <TextField
              placeholder="Enter Your Last Name"
              margin="dense"
              fullWidth
              type="text"
              name="lName"
              value={user.lName}
              onChange={handleInput}
            />
            <TextField
              placeholder="Enter Your Email "
              margin="dense"
              fullWidth
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <TextField
              placeholder="Confirm Password "
              margin="dense"
              fullWidth
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInput}
            />
            <TextField
              placeholder="Password"
              margin="dense"
              fullWidth
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell  align='center'>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Confirm password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.fName}</TableCell>
                <TableCell>{item.lName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.password}</TableCell>
                <TableCell>{item.confirmPassword}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CreateForm;
