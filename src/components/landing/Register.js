import React, { useState, Fragment } from 'react';
import axios from 'axios';


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '', 
        email: '',
        password: '',
        password2: ''
    })
    
    const { firstName, lastName, username, email, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
    const onSubmit =  async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Does not match')
        } else {
            const newUser = {
                firstName,
                lastName,
                username,
                email,
                password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newUser);

                const res = await axios.post('/register', body, config);
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
    }


    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder='First Name' value={firstName} name='firstName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Last Name' value={lastName} name='lastName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Username' value={username} name="username" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email Address' value={email} name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password" value={password} name="password" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="re-type password" value={password2} name="password2" onChange={handleChange} required />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </Fragment>
    )
};

export default Register;

/* <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
                <form action="/register" method='POST'>
                <div className="form-group">
                    <input type="text" placeholder='First Name' value={firstName} name='firstName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Last Name' value={lastName} name='lastName' onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Username' value={username} name="username" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email Address' value={email} name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password" value={password} name="password" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="re-type password" value={password2} name="password" onChange={handleChange} required />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
                </form>
            </div>
        </div> */