import { ACTION_TYPES } from "./Consts.js";

const initialState = {
  user: {},
  columns: [],
  cards: [],
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

  if (action.type === ACTION_TYPES.LOGOUT) {
    return {
      ...state,
      authorized: false,
    };
  }

  if (action.type === ACTION_TYPES.GET_COLOMNS_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.GET_COLOMNS_SUCCESS) {
    return {
      ...state,
      loading: false,
      columns: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.GET_COLOMNS_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.POST_COLUMN_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.POST_COLUMN_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  if (action.type === ACTION_TYPES.POST_COLUMN_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.GET_CARDS_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.GET_CARDS_SUCCESS) {
    return {
      ...state,
      loading: false,
      cards: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.GET_CARDS_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.POST_CARD_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.POST_CARD_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  if (action.type === ACTION_TYPES.POST_CARD_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_COLUMN_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_COLUMN_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_COLUMN_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_CARD_START) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_CARD_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  if (action.type === ACTION_TYPES.DELETE_CARD_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export default reducer;
