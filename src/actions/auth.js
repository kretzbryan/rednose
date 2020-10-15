import axios from 'axios';
import { setAlert } from './alert'
import { REGISTER_CONFIRMED, REGISTER_DENIED, USER_LOADED, AUTH_DENIED, LOGIN_CONFIRMED, LOGIN_DENIED, LOGOUT, CLEAR_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken';
import api from '../utils/api';



export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await api.get('/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_DENIED
        })
    }
}


export const register = ({ firstName, lastName, username, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ firstName, lastName, username, email, password });

    try {
        const res = await api.post('user/register', body, config);
        dispatch(setAlert('Register Success!', 'success'));
        dispatch({
            type: REGISTER_CONFIRMED
        })
    } catch(err) {
        const errors = err.response.data.errors;
        console.log(errors)
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_DENIED
        });
    }
}

export const login = ( username, password ) => async dispatch => {

    
    const body = JSON.stringify({ username, password });

    try{
        const res = await api.post('user/login', body);
        dispatch({
            type: LOGIN_CONFIRMED,
            payload: res.data
        })
        dispatch(loadUser())
    } catch(err) {
        const errors = err.message;
        console.log(errors)
       /*  if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        } */
        dispatch({
            type: LOGIN_DENIED
        });
    }
}

export const logout = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: LOGOUT })
}
