import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const Estimate = ({ text }) => {
  return (
    <>
      <FontAwesomeIcon icon={faStopwatch} />
      {text}
    </>
  );
};

export default Estimate;
