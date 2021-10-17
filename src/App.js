import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/column/components/Column";
import "./App.css";
import ColumnButton from "./components/column-button/ColumnButton";
import CreateColumn from "./components/create-column-form/CreateColumn";
import CreateCard from "./components/createCard/CreateCard";
import OpenCard from "./components/openCard/OpenCard";
import HeaderApp from "./components/headerApp/HeaderApp";
import { useDispatch, useSelector, connect } from "react-redux";
import { getColumnsFailure, getCardsFailure, reorderCard } from "./redux/actions";
import {
  getColumnsAsync,
  getCardsAsync,
  saveEditableCard,
  addColumnAsyncCall,
  addCardAsyncCall,
  removeColum,
  removeCard,
} from "./redux/thunk";

const App = ({
  saveEditedCard,
  getColumns,
  getCards,
  addColumn,
  addCardAsync,
  onRemoveColumn,
  onRemoveCard,
}) => {
  const [showButton, setShowButton] = useState(true);
  const columns = useSelector((state) => state.columns);
  const cards = useSelector((state) => state.cards);
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [createCardColumnId, setCreateCardColumnId] = useState(null);
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const dispatch = useDispatch();

  const saveCard = (header, description, estimate) => {
    const card = cards.filter((x) => x.id === selectedCardId)[0];
    card.header = header;
    card.description = description;
    card.estimate = estimate;

    saveEditedCard(card);
  };

  useEffect(() => {
    try {
      getColumns();
    } catch (error) {
      dispatch(getColumnsFailure("ERROR"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      getCards();
    } catch (error) {
      dispatch(getCardsFailure("ERROR"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickOnShowColunmButton = () => {
    setShowButton(false);
  };

  const clickOnAddColumnButton = async (column) => {
    if (columns.length < 5 && column) {
      await addColumn(column);
    }
    setShowButton(true);
  };

  const openCreateCard = (columnId) => {
    setShowCreateCardModal(true);
    setCreateCardColumnId(columnId);
  };

  const addCard = async (card) => {
    if (cards.length < 6 && card) {
      card.columnId = createCardColumnId;
      await addCardAsync(card);
    }
    setShowCreateCardModal(false);
  };

  const openCard = (cardId) => {
    setShowOpenCard(true);
    setSelectedCardId(cardId);
  };

  const closeOpenCard = () => {
    setShowOpenCard(false);
  };

  const getSelectedCard = () => cards.filter((x) => x.id === selectedCardId)[0];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      dispatch(reorderCard(source.index, destination.index));
    } else {
      const card = cards.filter((x) => x.id === result.draggableId)[0];
      card.columnId = destination.droppableId;
      saveEditedCard(card);
    }
  };

  return (
    <div className="App">
      <HeaderApp />
      <div className="columns-wrap">
        {showOpenCard ? (
          <OpenCard
            card={getSelectedCard()}
            columnName={columns.filter((x) => x.id === getSelectedCard().columnId)[0].name}
            closeOpenCard={closeOpenCard}
            saveEditableCard={saveCard}
          />
        ) : null}
        {showCreateCardModal ? (
          <CreateCard
            addCard={addCard}
            columnName={columns.filter((x) => x.id === createCardColumnId)[0].name}
          />
        ) : null}
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => {
            return (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <Column
                    key={column.id}
                    id={column.id}
                    cardValues={cards.filter((x) => x.columnId === column.id)}
                    name={column.name}
                    removeColumn={onRemoveColumn}
                    openCreateCard={openCreateCard}
                    removeCard={onRemoveCard}
                    openCard={openCard}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    placeholder={provided.placeholder}
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

const mapDispatchToProps = (dispatch) => {
  return {
    saveEditedCard: (card) => {
      dispatch(saveEditableCard(card));
    },
    getColumns: () => dispatch(getColumnsAsync()),
    getCards: () => dispatch(getCardsAsync()),
    addColumn: (column) => dispatch(addColumnAsyncCall(column)),
    addCardAsync: (card) => dispatch(addCardAsyncCall(card)),
    onRemoveColumn: (columnId) => dispatch(removeColum(columnId)),
    onRemoveCard: (id) => dispatch(removeCard(id)),
  };
};

export default connect(null, mapDispatchToProps)(App);
