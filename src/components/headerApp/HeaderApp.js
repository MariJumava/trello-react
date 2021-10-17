import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import "../headerApp/HeaderApp.css";

const HeaderApp = () => {
  const dispatch = useDispatch();
  const logoutClick = () => {
    dispatch(logout());
  };
  return (
    <div className="header-app">
      <button className="logout-btn" onClick={logoutClick}>
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

export default HeaderApp;
