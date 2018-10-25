import axios from 'axios';

import { AUTH_USER } from './types';

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

export const signout = () => {
  localStorage.removeItem('token');
  return { type: AUTH_USER, payload: '' };
}
