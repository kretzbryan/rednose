import React, { useState, Fragment } from 'react';

import axios from  'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();
        const user = { 
            username
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit} method='POST'>
                <div className="form-group">
                    <input type="text" name='username' onChange={handleChange} placeholder='Username'/>
                </div>
                <div className="form-group">
                    <input type="password" name='password' onChange={handleChange} placeholder='Password'/>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </Fragment>
    )
}

export default Login;