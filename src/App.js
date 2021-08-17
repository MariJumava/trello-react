import React, { useState } from "react";
import Column from "./components/column/components/Column";
import { Label } from "./types/Label";
import { User } from "./types/User";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";
//import Context from "./context";

const App = () => {
  const [showButton, setShowButton] = useState(true);
  const [columns, setColumns] = useState([]);

  const cardValues = {
    header: "Create a Card",
    dateCreated: new Date(2021, 7, 23),
    estimate: "15h",
    assignedUser: new User(1, "Mari", ""),
    labels: [new Label("102,255,102", "WEB LAYOUT")],
  };
  const list = [
    cardValues,
    cardValues,
    {
      header: "Create a Card",
      dateCreated: new Date(2021, 7, 23),
      estimate: "15h",
      assignedUser: new User(1, "Mari", "https://www.flaticon.com/free-icon/avatar_194938"),
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

  // я нашла видео для инпута только у меня это не сработало(((
  const createColumn = (title) => {
    setColumns(
      columns.concat([
        {
          // не могу понять что тут писать?
          title: title,
          completed: false,
        },
      ])
    );
  };
  // eslint-disable-next-line no-unused-vars
  const removeColum = (column) => {
    setColumns(columns.filter((col) => col === !column));
  };

  return (
    //<Context.Provider value={{ removeColum }}>
    <div className="App">
      <div className="columns-wrap">
        {columns.map((column) => {
          return <Column key={column.id} cardValues={list} name={column.name} />;
        })}
        {showButton ? (
          <ColumnButton onClick={clickOnShowColunmButton} />
        ) : (
          <CreateColumn onClick={clickOnAddColumnButton} onCreate={createColumn} />
        )}
      </div>
    </div>
    //</Context.Provider>
  );
};

export default App;
