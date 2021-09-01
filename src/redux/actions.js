import { ACTION_TYPES } from "./Consts";

export const loginStart = () => {
  return {
    type: ACTION_TYPES.LOGIN_START,
  };
};

export const loginSuccess = (user) => {
    return {
      type: ACTION_TYPES.LOGIN_SUCCESS,
      payload: user,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: ACTION_TYPES.LOGIN_FAILURE,
      payload: error,
    };
  };
  
    