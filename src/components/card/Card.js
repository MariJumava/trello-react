import React from "react";
import PropTypes from "prop-types";
import { User } from "../../types/User";
import { Label } from "../../types/Label";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-wrap">
      <header className="card-header">
        <h2 className="card-title">USB</h2>
        <div className="card-date">{getTime()}</div>
        <div className="card-estimate"></div>
      </header>
      <div className="card-user">{User}</div>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Card.PropTypes = {
  header: PropTypes.string,
  dateCreated: PropTypes.instanceOf(),
  estimate: PropTypes.string,
  assignedUser: PropTypes.instanceOf(User),
  labels: PropTypes.arrayOf(Label),
};

const getTime = () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = new Date().getDate();
  let hours = new Date().getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export default Card;
