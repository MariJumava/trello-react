import React, { useState } from "react";
import Column from "./components/column/components/Column";
import { Label } from "./types/Label";
import { User } from "./types/User";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";

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
      assignedUser: new User(
        1,
        "Mari",
        "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380"
      ),
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

  return (
    <div className="App">
      <div className="columns-wrap">
        {columns.map((column) => {
          return <Column key={column.id} cardValues={list} name={column.name} />;
        })}
      </div>
      {showButton ? (
        <ColumnButton onClick={clickOnShowColunmButton} />
      ) : (
        <CreateColumn onClick={clickOnAddColumnButton} />
      )}
    </div>
  );
};

export default App;
