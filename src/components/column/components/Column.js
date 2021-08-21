import React from "react";
import PropTypes from "prop-types";
import Card from "../../card/Card";
import "./Column.css";
import ColumnHeader from "./column-header/ColumnHeader";

const Column = (props) => {
  return (
    <div className="column-wrap">
      <div>
        <ColumnHeader
          header={props.name}
          cardCount={props.cardValues ? props.cardValues.length : 0}
          removeColumn={() => {
            props.removeColumn(props.id);
          }}
          openCreateCard={props.openCreateCard}
        />
      </div>
      <div className="list-cards">
        {props.cardValues.map((cardValue) => {
          return <Card key={cardValue.id} {...cardValue} />;
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
