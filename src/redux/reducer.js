import { ACTION_TYPES } from "./Consts.js";

const initialState = {
  user: {},
  loading: false,
  authorized: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.LOGIN_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload,
      loading: false,
      authorized: true,
    };
  }

  if (action.type === ACTION_TYPES.LOGIN_FAILURE) {
    return {
      ...state,
      user: {},
      loading: false,
      authorized: false,
      error: action.payload,
    };
  }

  return state;
};

export default reducer;
