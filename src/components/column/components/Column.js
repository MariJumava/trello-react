import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../../card/Card";
import "./Column.css";
import ColumnHeader from "./column-header/ColumnHeader";

const Column = (props) => {
  const [currentColumn, setCurrentColumn] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [columns, setColumns] = useState([]);

  const dragStartHandler = (e, column, cardValue) => {
    setCurrentColumn(column);
    setCurrentCard(cardValue);
  };

  const dragEndHandler = (e, column, cardValue) => {
    e.target.style.boxShadow = "none";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "cardValue") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragHandler = (e, column, cardValue) => {
    e.preventDefault();
    const currentIndex = currentColumn.cardValues.indexOf(currentCard);
    currentColumn.cardValues.splice(currentIndex, 1);
    const dropIndex = column.cardValues.indexOf(cardValue);
    column.cardValues.splice(dropIndex + 1, 0, currentCard);
    setColumns(
      columns.map((b) => {
        if (b.id === column.id) {
          return column;
        }
        if (b.id === currentColumn.id) {
          return currentColumn;
        }
        return b;
      })
    );
  };

  return (
    <div className="column-wrap">
      <div>
        <ColumnHeader
          header={props.name}
          cardCount={props.cardValues ? props.cardValues.length : 0}
          removeColumn={() => {
            props.removeColumn(props.id);
          }}
          openCreateCard={() => {
            props.openCreateCard(props.id);
          }}
        />
      </div>
      <div className="list-cards">
        {props.cardValues.map((cardValue) => {
          return (
            <Card
              key={cardValue.id}
              {...cardValue}
              openCard={() => {
                props.openCard(cardValue.id);
              }}
              removeCard={() => {
                props.removeCard(cardValue.id);
              }}
              onDragOver={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e, columns, cardValue)}
              onDragStart={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragOverHandler(e)}
              onDrop={(e) => dragHandler(e, columns, cardValue)}
              draggable={true}
            />
          );
        })}
      </div>
    </div>
  );
};

Column.propTypes = {
  header: PropTypes.string,
  button: PropTypes.string,
  counter: PropTypes.number,
  list: PropTypes.arrayOf(Card),
};

export default Column;
