import { Container, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const ValidationForm = () => {
    const [user, setUser] = useState({
        email: '', password: ""
    });

    const [errors, setErrors] = useState({
        email: false, password: false
    })

    const [data, setData] = useState([])
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{6,}$/;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((user) => {
            return { ...user, [name]: value }
        })
        console.log(user);

        if (name === 'email') {
            setErrors((errors) => ({ ...errors, email: !regex.test(value) }));
        }
        if (name === 'password') {
            setErrors((errors) => ({ ...errors, password: !passwordRegex.test(value) }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.email && !errors.password) {
            alert('Form Submitted: ' + JSON.stringify(user));
          } else {
            alert('Form has validation errors.');
          }
        setData((data) => {
            return [...data, { ...user }]
        })

        setUser({
            email: '',
            password: "",
        })
    }

    return (
        <Container>
            <div className="validation-form">
                <h1 >Validation Form</h1><br />
                <p >Please fill in the form below to validate your account.</p></div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Email Address'
                    margin="dense"
                    fullWidth
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={handleChange}
                />
                {
                    errors.email && <span> <small style={{ color: "red" }}> Invalid Email address!</small> </span>}

                <TextField
                    label='Password'
                    margin="dense"
                    fullWidth
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                /> {errors.password && (
                    <span style={{ color: 'red' }}>
                        * Password must meet the criteria (at least 6 characters, including uppercase, lowercase, digit, and special character).
                    </span>
                )}
                <Button type="submit" variant="contained" sx={{ mt: "5px" }}>Submit</Button>
            </form>

            {
                data.map((item, index) => {
                    return (
                        
                           <ol  key={index}>
                                <li>{item.email}</li>
                                <li>{item.password}</li>
                            </ol>
                        
                    )
                })
            }
        </Container>
    )
}

export default ValidationForm