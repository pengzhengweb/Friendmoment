import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {GET_ERRORS,SET_CURRENT_USER} from './types';

export const registerUser = (userData,history) => dispatch =>{
    axios.post("/api/users/register",userData)
         .then(res => history.push("/login"))
         .catch(err =>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        )
}

export const loginUser = (userData,history) => dispatch => {
    axios.post("/api/users/login",userData)
         .then(res => {
             const {token} = res.data;
             console.log("token:" + token);
             localStorage.setItem("jwtToken",token);
             setAuthToken(token);

             //解析token
             const decoded = jwt_decode(token);
             console.log("decodedToken:"+ decoded);
             dispatch({
                 type:SET_CURRENT_USER,
                 payload:decoded
             })
         })
         .catch(err => 
              dispatch({
                  type:GET_ERRORS,
                  payload:err.response.data
              }))
}
