import React, { useState, Fragment } from 'react';

import axios from  'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    return (
        <Fragment>
            <form action='/login' method='POST'>
                <div className="form-group">
                    <input type="text" name='username' placeholder='Username'/>
                </div>
                <div className="form-group">
                    <input type="password" name='password' placeholder='Password'/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </div>
            </form>
        </Fragment>
    )
}