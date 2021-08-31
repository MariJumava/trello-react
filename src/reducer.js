import { ACTION_TYPES } from "./consts/Consts.js";

const initialState = {
  email: "",
  password: "",
  user: {},
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.CHANGE_EMAIL) {
    return {
      ...state,
      email: action.payload,
      error: state.error ? "" : state.error,
    };
  }

  if (action.type === ACTION_TYPES.CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.payload,
      error: "",
    };
  }

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
    };
  }

  if (action.type === ACTION_TYPES.LOGIN_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export default reducer;
