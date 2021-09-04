import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import ProtectedRoute from "../redux/ProtectedRoute";

const Navigator = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" />
    </Switch>
  );
};

export default Navigator;
