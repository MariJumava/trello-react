import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ColumnMenu = () => {
  return (
    <div className="column-delete">
      <FontAwesomeIcon icon={faTrashAlt} />
    </div>
  );
};

export default ColumnMenu;
