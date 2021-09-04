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

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const getColumns = () => {
  return {
    type: ACTION_TYPES.GET_COLOMNS_START,
  };
};

export const getColumnsSuccess = (columns) => {
  return {
    type: ACTION_TYPES.GET_COLOMNS_SUCCESS,
    payload: columns,
  };
};

export const getColumnsFailure = (error) => {
  return {
    type: ACTION_TYPES.GET_COLOMNS_FAILURE,
    payload: error,
  };
};

export const postColumn = (column) => {
  return {
    type: ACTION_TYPES.POST_COLUMN_START,
  };
};

export const postColumnSuccess = () => {
  return {
    type: ACTION_TYPES.POST_COLUMN_SUCCESS,
  };
};

export const postColumnFailure = (error) => {
  return {
    type: ACTION_TYPES.POST_COLUMN_FAILURE,
    payload: error,
  };
};
