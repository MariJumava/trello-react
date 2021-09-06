import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/column/components/Column";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";
import CreateCard from "./components/createCard/CreateCard";
import OpenCard from "./components/openCard/OpenCard";
import HeaderApp from "./components/headerApp/HeaderApp";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCard,
  deleteCardFailure,
  deleteCardSuccess,
  deleteColumn,
  deleteColumnFailure,
  deleteColumnSuccess,
  getColumns,
  getColumnsFailure,
  getColumnsSuccess,
  postCardSuccess,
  postColumn,
  postColumnFailure,
} from "./redux/actions";
import {
  getCards,
  getCardsSuccess,
  getCardsFailure,
  postCard,
  postCardFailure,
} from "./redux/actions";
import axios from "axios";

const App = () => {
  const [showButton, setShowButton] = useState(true);
  const columns = useSelector((state) => state.columns);
  const cards = useSelector((state) => state.cards);
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [createCardColumnId, setCreateCardColumnId] = useState(null);
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const dispatch = useDispatch();

  const getColumnsAsync = async () => {
    dispatch(getColumns());

    const responce = await axios.get("http://localhost:3000/columns");

    if (responce.status === 200) {
      const columns = responce.data;
      dispatch(getColumnsSuccess(columns));
    } else {
      dispatch(getColumnsFailure("ERROR"));
    }
  };

  useEffect(() => {
    try {
      getColumnsAsync();
    } catch (error) {
      dispatch(getColumnsFailure("ERROR"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      getCardsAsync();
    } catch (error) {
      dispatch(getCardsFailure("ERROR"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCardsAsync = async () => {
    dispatch(getCards());

    const responce = await axios.get("http://localhost:3000/cards");

    if (responce.status === 200) {
      const cards = responce.data;
      dispatch(getCardsSuccess(cards));
    } else {
      dispatch(getCardsFailure("ERROR"));
    }
  };

  const clickOnShowColunmButton = () => {
    setShowButton(false);
  };

  const clickOnAddColumnButton = async (column) => {
    if (columns.length < 5 && column) {
      await addColumnAsyncCall(column);
    }
    setShowButton(true);
  };

  const addColumnAsyncCall = async (column) => {
    try {
      dispatch(postColumn());

      const responce = await axios.post("http://localhost:3000/columns", column);

      if (responce.status === 201) {
        getColumnsSuccess();
        await getColumnsAsync();
      } else {
        dispatch(postColumnFailure("Oops!"));
      }
    } catch (err) {
      dispatch(postColumnFailure("Oops!"));
    }
  };

  const removeColum = async (itemId) => {
    try {
      dispatch(deleteColumn());

      let responce = await axios.delete(`http://localhost:3000/columns/${itemId}`);

      if (responce.status === 200) {
        deleteColumnSuccess();
        await getColumnsAsync();
      } else {
        dispatch(deleteColumnFailure("Oops!"));
      }
    } catch (err) {
      dispatch(deleteColumnFailure("Oops!"));
    }
  };

  const addCardAsyncCall = async (card) => {
    try {
      dispatch(postCard());

      const responce = await axios.post("http://localhost:3000/cards", card);

      if (responce.status === 201) {
        postCardSuccess();
        await getCardsAsync();
      } else {
        dispatch(postCardFailure("Oops!"));
      }
    } catch (err) {
      dispatch(postCardFailure("Oops!"));
    }
  };

  const openCreateCard = (columnId) => {
    setShowCreateCardModal(true);
    setCreateCardColumnId(columnId);
  };

  const addCard = async (card) => {
    if (cards.length < 6 && card) {
      card.columnId = createCardColumnId;
      await addCardAsyncCall(card);
    }
    setShowCreateCardModal(false);
  };

  const removeCard = async (id) => {
    try {
      dispatch(deleteCard());

      let responce = await axios.delete(`http://localhost:3000/cards/${id}`);

      if (responce.status === 200) {
        deleteCardSuccess();
        await getCardsAsync();
      } else {
        dispatch(deleteCardFailure("Oops!"));
      }
    } catch (err) {
      dispatch(deleteCardFailure("Oops!"));
    }
  };

  const openCard = (cardId) => {
    setShowOpenCard(true);
    setSelectedCardId(cardId);
  };

  const closeOpenCard = () => {
    setShowOpenCard(false);
  };

  const getSelectedCard = () => cards.filter((x) => x.id === selectedCardId)[0];

  return (
    <div className="App">
      <HeaderApp />
      <div className="columns-wrap">
        {showOpenCard ? (
          <OpenCard
            card={getSelectedCard()}
            columnName={columns.filter((x) => x.id === getSelectedCard().columnId)[0].name}
            closeOpenCard={closeOpenCard}
          />
        ) : null}
        {showCreateCardModal ? (
          <CreateCard
            addCard={addCard}
            columnName={columns.filter((x) => x.id === createCardColumnId)[0].name}
          />
        ) : null}
        <DragDropContext>
          {columns.map((column) => {
            return (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <Column
                    key={column.id}
                    id={column.id}
                    cardValues={cards.filter((x) => x.columnId === column.id)}
                    name={column.name}
                    removeColumn={removeColum}
                    openCreateCard={openCreateCard}
                    removeCard={removeCard}
                    openCard={openCard}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  />
                )}
              </Droppable>
            );
          })}
        </DragDropContext>
        {showButton ? (
          <ColumnButton onClick={clickOnShowColunmButton} />
        ) : (
          <CreateColumn onClick={clickOnAddColumnButton} />
        )}
      </div>
    </div>
  );
};

export default App;
