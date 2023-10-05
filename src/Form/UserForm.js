import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropsData from './PropsData';

const UserFrom = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    number: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => {
      return {
        ...user, [name]: value
      }
    });

    setErrors({ ...errors, [name]: '' });
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (user.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (user.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(user.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (user.number.trim() === '') {
      newErrors.number = 'Mobile No. is required';
      isValid = false;
    }

    if (user.password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const isValidEmail = (email) => {
 
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  }

  const [inputData, setInputData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setInputData([...inputData, user]);
      setUser({
        name: '',
        email: '',
        number: '',
        password: ''
      });
    }
  }

  return (
    <>
      <Box sx={{ m: "20px" }}>
        <Typography variant="h3" component={'div'} sx={{
          background: 'orange',
          padding: "10px"
        }}>
          <b>Form Fill Here</b>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            value={user.name}
            onChange={handleChange}
            label="Name"
            margin='dense'
            name="name"
            type="text"
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            value={user.email}
            onChange={handleChange}
            label="Email"
            margin='dense'
            name="email"
            type="email"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            value={user.number}
            onChange={handleChange}
            label="Mobile No."
            margin='dense'
            name="number"
            type="number"
            fullWidth
            error={Boolean(errors.number)}
            helperText={errors.number}
          />
          <TextField
            value={user.password}
            onChange={handleChange}
            label="Password"
            margin='dense'
            name="password"
            type="password"
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button variant='outlined' type="submit">Submit</Button>
        </form>
      </Box>

      <PropsData inputData={inputData}/>
    </>
  )
}

export default UserFrom;
