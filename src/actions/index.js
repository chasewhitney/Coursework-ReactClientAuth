import axios from 'axios';

import { AUTH_USER } from './types';
//lec 127 or 128
export const signup = (formProps, callback) => async dispatch => {

  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    callback();
  } catch(err) {
    callback(err.response);
  }

};
