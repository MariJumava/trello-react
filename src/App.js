import React, { useState } from "react";
import Column from "./components/column/components/Column";
import { Label } from "./types/Label";
import { User } from "./types/User";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";
import CreateCard from "./components/createCard/CreateCard";

const App = () => {
  const [showButton, setShowButton] = useState(true);
  const [columns, setColumns] = useState([]);
  const [cards, setCards] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const cardValues = {
    header: "Create a Card",
    dateCreated: new Date(2021, 7, 23),
    estimate: "15h",
    labels: [new Label("102,255,102", "WEB LAYOUT")],
    assignedUser: new User(1, "Mari", "https://www.flaticon.com/free-icon/avatar_194938"),
  };
  //переделать в стейт по аналогии с columns
  //const [list, setList] = useState([]);
  const list = [
    cardValues,
    cardValues,
    {
      header: "Create a Card",
      dateCreated: new Date(2021, 7, 23),
      estimate: "15h",
      assignedUser: new User(2, "Mark", "https://www.flaticon.com/free-icon/avatar_194938"),
      labels: [new Label("102,255,102", "WEB LAYOUT"), new Label("0,102,102", "QA")],
    },
  ];

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

  const openCreateCard = () => {
    setShowCard(true);
  };

  const addCard = (card) => {
    if (cards.length < 10 && card) {
      cards.push(card);
      setCards(cards);
    }
    setShowCard(false);
  };

  return (
    <div className="App">
      <div className="columns-wrap">
        {showCard ? <CreateCard addCard={addCard} /> : null}
        {columns.map((column) => {
          return (
            <Column
              key={column.id}
              id={column.id}
              cardValues={list}
              name={column.name}
              removeColumn={removeColum}
              openCreateCard={openCreateCard}
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
