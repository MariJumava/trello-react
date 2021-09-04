import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Loader from "./Loader";
import { Redirect } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../../redux/actions";

const Login = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userPassword = (event) => {
    setPassword(event.target.value);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const signIn = async () => {
    try {
      dispatch(loginStart());

      const responce = await axios.get("http://localhost:3000/users");
      const users = responce.data;

      const loginUser = users.filter((x) => x.email === email);
      if (loginUser && loginUser.length > 0 && loginUser[0].password === password) {
        dispatch(loginSuccess(loginUser[0]));
      } else {
        dispatch(loginFailure("Wrong email or password"));
      }
    } catch (err) {
      console.log("error", err);
      dispatch(loginFailure("Something is wrong!"));
    }
  };

  return isAuthorized ? (
    <Redirect to="/" />
  ) : (
    <div className="login-wrap">
      <input
        className="login-email"
        type="text"
        onChange={userEmail}
        value={email}
        placeholder="email"
      />
      <input
        className="login-password"
        type="password"
        onChange={userPassword}
        value={password}
        placeholder="password"
      />
      <span style={{ color: "red" }}>{error}</span>
      <div className="login-buttons">
        <button className="login-clear-email-btn" onClick={clearForm}>
          Clear
        </button>
        <Loader onClick={signIn} />
      </div>
    </div>
  );
};

export default Login;
