import React, { useEffect, useState } from "react";
import Column from "./components/column/components/Column";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";
import CreateCard from "./components/createCard/CreateCard";
import OpenCard from "./components/openCard/OpenCard";
import HeaderApp from "./components/HeaderApp";
import { useDispatch, useSelector } from "react-redux";
import {
  getColumns,
  getColumnsFailure,
  getColumnsSuccess,
  postColumn,
  postColumnFailure,
} from "./redux/actions";
import axios from "axios";

const App = () => {
  const [showButton, setShowButton] = useState(true);
  const columns = useSelector((state) => state.columns);
  const [cards, setCards] = useState([]);
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

  const clickOnShowColunmButton = () => {
    setShowButton(false);
  };

  const clickOnAddColumnButton = (column) => {
    if (columns.length < 5 && column) {
      addColumnAsyncCall(column);
    }
    setShowButton(true);
  };

  const removeColum = (id) => {
    //setColumns(columns.filter((col) => col.id !== id));
  };

  const addColumnAsyncCall = async (column) => {
    try {
      dispatch(postColumn());

      const responce = await axios.post("http://localhost:3000/columns", column);

      if (responce.status === 201) {
        await getColumnsAsync();
      } else {
        dispatch(postColumnFailure("Oops!"));
      }
    } catch (err) {
      dispatch(postColumnFailure("Oops!"));
    }
  };

  const openCreateCard = (columnId) => {
    setShowCreateCardModal(true);
    setCreateCardColumnId(columnId);
  };

  const addCard = (card) => {
    if (cards.length < 6 && card) {
      card.columnId = createCardColumnId;
      cards.push(card);
      setCards(cards);
    }
    setShowCreateCardModal(false);
  };

  const removeCard = (id) => {
    setCards(cards.filter((c) => c.id !== id));
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
        {columns.map((column) => {
          return (
            <Column
              key={column.id}
              id={column.id}
              cardValues={cards.filter((x) => x.columnId === column.id)}
              name={column.name}
              removeColumn={removeColum}
              openCreateCard={openCreateCard}
              removeCard={removeCard}
              openCard={openCard}
            />
          );
        })}
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
