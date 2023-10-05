import { Box, Button, ButtonGroup, Container, Dialog, Drawer, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ValidForm = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    number: '',
    cPassword: '',
    password: '',
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    number: false,
    cPassword: false,
    password: false,
  });

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((inputData) => ({ ...inputData, [name]: value }));
    console.log(inputData);

    if (name === 'name') {
      setError((error) => ({ ...error, name: value.length < 3 }));
    }
    if (name === 'email') {
      setError((error) => ({ ...error, email: !regex.test(value) }));
    }

    if (name === 'number') {
      setError((error) => ({ ...error, number: value.length < 10 }));
    }

    if (name === 'password') {
      setError((error) => ({ ...error, password: value !== inputData.cPassword }));
    }

    if (name === 'cPassword') {
      setError((error) => ({ ...error, cPassword: value !== inputData.password }));
    }
  };
  
  const [storedData, setStoredData] = useState({});
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('myData')) || {};
    setStoredData(storedData);
}, []); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.number || !inputData.password || !inputData.cPassword) {
        alert('Please fill in all required fields.');
      }
      else(
        alert("Thanks for Submitting")
      )
      localStorage.setItem('myData', JSON.stringify(inputData));
      setStoredData(inputData);
  }
  const [open, setOpen]=useState(false)
  return (
    <>
      <Container>
      <Button variant='outlined' sx={{m:"20px"}} onClick={()=>setOpen(true)}>Form</Button>
      <Dialog open={open} onClose={()=>setOpen(false)}>
      <Box p={"10px"}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: 'green' }}>Valid Form</h1>
            <br />
            <TextField
              onChange={handleChange}
              name="name"
              value={inputData.name}
              fullWidth
              type="text"
              label="Name"
              variant="outlined"
              size="large"
              margin="dense"
            />
            {error.name && <p style={{ color: 'red' }}>Enter Valid Name</p>}
            <TextField
              onChange={handleChange}
              name="email"
              value={inputData.email}
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              size="large"
              margin="dense"
            />
            {error.email && <p style={{ color: 'red' }}>Invalid Email</p>}
            <TextField
              onChange={handleChange}
              name="number"
              value={inputData.number}
              fullWidth
              type="number"
              label="Phone No "
              variant="outlined"
              size="large"
              margin="dense"
            />
            {error.number && <p style={{ color: 'red' }}>Enter Valid number</p>}
            <TextField
              onChange={handleChange}
              name="cPassword"
              value={inputData.cPassword}
              fullWidth
              type="password"
              label="Confirm Password"
              variant="outlined"
              size="large"
              margin="dense"
            />
            {error.cPassword && <p style={{ color: 'red' }}>Passwords do not match</p>}
            <TextField
              onChange={handleChange}
              name="password"
              value={inputData.password}
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              size="large"
              margin="dense"
            />
            {error.password && <p style={{ color: 'red' }}>Passwords do not match</p>}
            <ButtonGroup>
            <Button type="submit" sx={{ m: '10px' }} variant="contained">
              Submit
            </Button>
            <Button  sx={{ m: '10px' }} variant="outlined" color="error" onClick={()=>setOpen(false)}>Cancel</Button>
            </ButtonGroup>
          </form>
        </Box>
      </Dialog>
       </Container>
    </>
  );
};

export default ValidForm;
