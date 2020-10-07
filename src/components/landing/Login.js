import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';


const Login = ({ login, isAuthenticated }) => {
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
        login(username, password)
    }

    if(isAuthenticated) {
        return <Redirect to='/home' />
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

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login);