import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ColumnMenu = ({ onClick }) => {
  return (
    <div className="column-delete" onClick={onClick}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </div>
  );
};

export default ColumnMenu;
