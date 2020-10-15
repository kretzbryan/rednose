import { ADD_GIG, GET_GIGS, GIG_ERROR, DELETE_GIG } from '../actions/types';

const initialState = {
    gigs: [],
    gig: null,
    loading: null,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch( type ) {
        case ADD_GIG:
            return {
                ...state,
                gigs: [...state.gigs, ...payload],
                loading: false
            }
        case DELETE_GIG:
            return {
                ...state,
                gigs: state.gigs.filter( gig => gig._id !== payload),
                loading: false
            }
        case GET_GIGS:
            return {
                ...state,
                gigs: [...payload],
                loading: false
            }
        case GIG_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}