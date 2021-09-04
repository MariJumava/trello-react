import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import App from "../App";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.authorized);

  return (
    <Route render={(props) => (isAuthenticated ? <App {...props} /> : <Redirect to="/login" />)} />
  );
};

export default ProtectedRoute;
