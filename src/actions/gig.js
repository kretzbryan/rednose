import api from '../utils/api';
import { ADD_GIG, GET_GIGS, GIG_ERROR, DELETE_GIG, DELETE_POST } from './types';

export const addGig = ({ title, location, text }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ title, location, text })
    try {
        const res = await api.post('home/add-gig', body, config);
        dispatch({
            type: ADD_GIG,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GIG_ERROR,
            payload: err
        })
    }
    
}

export const getGigs = () => async dispatch => {
    try {
        const res = await api.get('gigs');
        console.log(res.data)
        dispatch({
            type: GET_GIGS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GIG_ERROR,
            payload: err
        })
    }
}

export const deleteGig = id => async dispatch => {
    try {

        const res = api.delete(`home/delete-gig${id}`);
        dispatch({
            type: DELETE_GIG,
            payload: id
        })
        
    } catch (err) {
        
    }
}