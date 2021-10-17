import {
  deleteCard,
  deleteCardFailure,
  deleteCardSuccess,
  deleteColumn,
  deleteColumnFailure,
  deleteColumnSuccess,
  postCardSuccess,
  postColumn,
  postColumnFailure,
  putCard,
  putCardSuccess,
  putCardFailure,
  postColumnSuccess,
  getCards,
  getCardsSuccess,
  getCardsFailure,
  getColumns,
  getColumnsSuccess,
  getColumnsFailure,
  postCard,
  postCardFailure,
} from "./actions";
import axios from "axios";

export const saveEditableCard = (card) => {
  return async (dispatch) => {
    try {
      dispatch(putCard());

      const responce = await axios.put(`http://localhost:3000/cards/${card.id}`, card);

      if (responce.status === 200) {
        dispatch(putCardSuccess());
        getCardsAsync()(dispatch);
      } else {
        dispatch(putCardFailure("ERROR"));
      }
    } catch (error) {
      dispatch(putCardFailure("ERROR!"));
    }
  };
};
export const getColumnsAsync = () => {
  return async (dispatch) => {
    dispatch(getColumns());

    const responce = await axios.get("http://localhost:3000/columns");

    if (responce.status === 200) {
      const columns = responce.data;
      dispatch(getColumnsSuccess(columns));
    } else {
      dispatch(getColumnsFailure("ERROR"));
    }
  };
};

export const getCardsAsync = () => {
  return async (dispatch) => {
    dispatch(getCards());

    const responce = await axios.get("http://localhost:3000/cards");

    if (responce.status === 200) {
      const cards = responce.data;
      dispatch(getCardsSuccess(cards));
    } else {
      dispatch(getCardsFailure("ERROR"));
    }
  };
};

export const addColumnAsyncCall = (column) => {
  return async (dispatch) => {
    try {
      dispatch(postColumn());

      const responce = await axios.post("http://localhost:3000/columns", column);

      if (responce.status === 201) {
        dispatch(postColumnSuccess());
        getColumnsAsync()(dispatch);
      } else {
        dispatch(postColumnFailure("Oops!"));
      }
    } catch (err) {
      dispatch(postColumnFailure("Oops!"));
    }
  };
};

export const removeColum = (itemId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteColumn());

      let responce = await axios.delete(`http://localhost:3000/columns/${itemId}`);

      if (responce.status === 200) {
        dispatch(deleteColumnSuccess());
        getColumnsAsync()(dispatch);
      } else {
        dispatch(deleteColumnFailure("Oops!"));
      }
    } catch (err) {
      dispatch(deleteColumnFailure("Oops!"));
    }
  };
};

export const addCardAsyncCall = (card) => {
  return async (dispatch) => {
    try {
      dispatch(postCard());

      const responce = await axios.post("http://localhost:3000/cards", card);

      if (responce.status === 201) {
        postCardSuccess();
        getCardsAsync()(dispatch);
      } else {
        dispatch(postCardFailure("Oops!"));
      }
    } catch (err) {
      dispatch(postCardFailure("Oops!"));
    }
  };
};

export const removeCard = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteCard());

      let responce = await axios.delete(`http://localhost:3000/cards/${id}`);

      if (responce.status === 200) {
        dispatch(deleteCardSuccess());
        getCardsAsync()(dispatch);
      } else {
        dispatch(deleteCardFailure("Oops!"));
      }
    } catch (err) {
      dispatch(deleteCardFailure("Oops!"));
    }
  };
};
