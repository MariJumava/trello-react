import React, { useState } from "react";
import Column from "./components/column/components/Column";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";
import CreateCard from "./components/createCard/CreateCard";
import OpenCard from "./components/openCard/OpenCard";
import Login from "./components/login/Login";

const App = () => {
  const [showButton, setShowButton] = useState(true);
  const [columns, setColumns] = useState([]);
  const [cards, setCards] = useState([]);
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [createCardColumnId, setCreateCardColumnId] = useState(null);
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const clickOnShowColunmButton = () => {
    setShowButton(false);
  };

  const clickOnAddColumnButton = (column) => {
    if (columns.length < 5 && column) {
      columns.push(column);
      setColumns(columns);
    }
    setShowButton(true);
  };

  const removeColum = (id) => {
    setColumns(columns.filter((col) => col.id !== id));
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
      <Login />
      <div className="columns-wrap">
        {showOpenCard ? (
          <OpenCard
            card={getSelectedCard()}
            columnName={columns.filter((x) => x.id === selectedCardId().columnId)[0].columnName}
            closeOpenCard={closeOpenCard}
            cardName={cards.filter((x) => x.id === selectedCardId)[0].header}
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
