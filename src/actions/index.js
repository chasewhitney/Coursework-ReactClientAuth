import axios from 'axios';

import { AUTH_USER } from './types';
//lec 127 or 128
export const signup = (formProps) => dispatch => {
  axios.post('http://localhost:3090/signup', formProps);
};
