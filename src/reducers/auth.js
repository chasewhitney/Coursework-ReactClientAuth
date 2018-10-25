import { AUTH_USER, SIGN_OUT } from '../actions/types';

export default function(state = '', action){
  switch(action.type) {
    case AUTH_USER:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
}
