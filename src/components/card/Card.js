import React from "react";
import PropTypes from "prop-types";
import { User } from "../../types/User";
import { Label } from "../../types/Label";
import "./Card.css";
import Estimate from "./components/estimate/Estimate";
import LabelComponent from "./components/label/LabelComponent";
import AssignedUser from "./components/assignedUser/AssignedUser";

const Card = (props) => {
  return (
    <div className="card-wrap">
      <header className="card-header">
        <div className="vertical-line"></div>
        <div className="card-title-with-btn">
          <h3 className="card-title">{props.header}</h3>
          <button className="delete-card-btn">&times;</button>
        </div>
        <div className="date-wrap">
          <div className="card-date">
            {props.dateCreated.toLocaleString("ru", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              timezone: "UTC",
            })}
          </div>
          <span className="header-date-separator"> | </span>
          <div className="card-estimate">
            <Estimate text={props.estimate} />
          </div>
        </div>
      </header>
      {props.labels.map((label) => {
        return <LabelComponent key={label.id} label={label} />;
      })}
      <div className="card-user">
        <AssignedUser user={props.assignedUser} />
      </div>
    </div>
  );
};

Card.propTypes = {
  header: PropTypes.string,
  dateCreated: PropTypes.instanceOf(Date),
  estimate: PropTypes.string,
  assignedUser: PropTypes.instanceOf(User),
  labels: PropTypes.arrayOf(Label),
};

export default Card;
