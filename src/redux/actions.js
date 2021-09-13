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

export const getCards = () => {
  return {
    type: ACTION_TYPES.GET_CARDS_START,
  };
};

export const getCardsSuccess = (cards) => {
  return {
    type: ACTION_TYPES.GET_CARDS_SUCCESS,
    payload: cards,
  };
};

export const getCardsFailure = (error) => {
  return {
    type: ACTION_TYPES.GET_CARDS_FAILURE,
    payload: error,
  };
};

export const postCard = (card) => {
  return {
    type: ACTION_TYPES.POST_CARD_START,
  };
};

export const postCardSuccess = () => {
  return {
    type: ACTION_TYPES.POST_CARD_SUCCESS,
  };
};

export const postCardFailure = (error) => {
  return {
    type: ACTION_TYPES.POST_CARD_FAILURE,
    payload: error,
  };
};

export const deleteColumn = (column) => {
  return {
    type: ACTION_TYPES.DELETE_COLUMN_START,
  };
};

export const deleteColumnSuccess = () => {
  return {
    type: ACTION_TYPES.DELETE_COLUMN_SUCCESS,
  };
};

export const deleteColumnFailure = (error) => {
  return {
    type: ACTION_TYPES.DELETE_COLUMN_FAILURE,
    payload: error,
  };
};

export const deleteCard = (card) => {
  return {
    type: ACTION_TYPES.DELETE_CARD_START,
  };
};

export const deleteCardSuccess = () => {
  return {
    type: ACTION_TYPES.DELETE_CARD_SUCCESS,
  };
};

export const deleteCardFailure = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CARD_FAILURE,
    payload: error,
  };
};

export const putCard = () => {
  return {
    type: ACTION_TYPES.PUT_CARD_START,
  };
};

export const putCardSuccess = () => {
  return {
    type: ACTION_TYPES.PUT_CARD_SUCCESS,
  };
};

export const putCardFailure = (error) => {
  return {
    type: ACTION_TYPES.PUT_CARD_FAILURE,
    payload: error,
  };
};

export const reorderCard = (startIndex, endIndex) => {
  return {
    type: ACTION_TYPES.REORDER_CARDS,
    payload: {
      startIndex,
      endIndex,
    },
  };
};
