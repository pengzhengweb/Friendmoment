import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {
    GET_ERRORS
} from './types';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => history.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.reponse.data
            }))
}