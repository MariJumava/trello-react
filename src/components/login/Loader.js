import React from "react";
import { useSelector } from "react-redux";
import "./Loader.css";

const Loader = ({ onClick }) => {
  const loading = useSelector((state) => state.loading);

  const showLoading = () => {
    onClick();
  };

  return (
    <div>
      <button className="login-sign-in-btn" onClick={showLoading}>
        Sign In
      </button>
      <div className="loader-wrap">{loading && <div className="loader" />}</div>
    </div>
  );
};

export default Loader;
