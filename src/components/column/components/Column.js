import React from "react";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import Card from "../../card/Card";
import "./Column.css";
import ColumnHeader from "./column-header/ColumnHeader";

const Column = React.forwardRef((props, ref, placeholder) => (
  <div ref={ref} className="column-wrap">
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
      {props.cardValues.map((cardValue, index) => {
        return (
          <Draggable key={cardValue.id} draggableId={cardValue.id} index={index}>
            {(provided) => (
              <Card
                key={cardValue.id}
                {...cardValue}
                openCard={() => {
                  props.openCard(cardValue.id);
                }}
                removeCard={() => {
                  props.removeCard(cardValue.id);
                }}
                ref={provided.innerRef}
                draggableProps={provided.draggableProps}
                dragHandleProps={provided.dragHandleProps}
              />
            )}
          </Draggable>
        );
      })}
      {placeholder}
    </div>
  </div>
));

Column.propTypes = {
  header: PropTypes.string,
  button: PropTypes.string,
  counter: PropTypes.number,
  list: PropTypes.arrayOf(Card),
};

export default Column;
