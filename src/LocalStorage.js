import React, { useState, useEffect } from 'react';

function LocalStorageExample() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const [error, setError] = useState({
        name: false, email: false, age: false
    });

    
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const [storedData, setStoredData] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('myData')) || {};
        setStoredData(storedData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if(name === 'name'){
            setError((error)=>({
                ...error, name:value.length < 3
            }))
        }
        if(name === 'email'){
            setError((error)=>({
                ...error, email:!regex.test(value)
            }))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('myData', JSON.stringify(formData));
        setStoredData(formData);
    };

    return (
        <div>
            <h1>LocalStorage Example with Multiple Inputs</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="na-me"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                    />
                    {
                        error.name && <div style={{color:"red"}}>invalid name must be 3 character</div>
                    }
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                    />
                    {
                        error.email && <p style={{color:"red"}}>invalid Email</p>
                    }
                </label>
                <label>
                    Age:
                    <input
                        type="num-ber"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Enter age"
                    />
                </label>
                <button type="submit">Store Data</button>
            </form>
            <div>
                <h2>Stored Data:</h2>
                <p>Name: {storedData.name || 'N/A'}</p>
                <p>Email: {storedData.email || 'N/A'}</p>
                <p>Age: {storedData.age || 'N/A'}</p>
            </div>
        </div>
    );
}

export default LocalStorageExample;
