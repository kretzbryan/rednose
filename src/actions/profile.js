import api from '../utils/api';
import { GET_PROFILE, PROFILE_ERROR, GET_PROFILES } from './types';

export const getUserDashboard = () => async dispatch => {
    try {
        const res = await api.get('user/home');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: err
        })
    }
}

export const getUserProfile = id => async dispatch => {
    try {
        const res = await api.get(`profile/${id}`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: err
        })
    }
}

export const getAllProfiles = () => async dispatch => {
    try {
        
        const res = await api.get('profiles');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: err
        })
    }
}