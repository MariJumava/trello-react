import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Loader from "./Loader";
import { ACTION_TYPES } from "./consts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const email = useSelector((state) => {
    return state.email;
  });
  const password = useSelector((state) => {
    return state.password;
  });
  const user = useSelector((state) => {
    return state.user;
  });
  const error = useSelector((state) => {
    return state.error;
  });

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userPassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event) => {
    const changeEmailAction = {
      type: ACTION_TYPES.CHANGE_EMAIL,
      payload: event.target.value,
    };
    dispatch(changeEmailAction);

    const onChangePassword = (event) => {
      dispatch({
        type: ACTION_TYPES.CHANGE_PASSWORD,
        payload: event.target.value,
      });
    };

  const signIn = async () => {
    try {
      dispatch({
        type: ACTION_TYPES.LOGIN_START,
      });

      const responce = await axios.post("http://localhost:3001/auth/sign-in", {
        email: email,
        password: password,
      });
    
    dispatch({
      type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: responce.data,
    });
  } catch (err) {
    console.log("error", err);
        dispatch({
          type: ACTION_TYPES.LOGIN_FAILURE,
          payload: err.responce.data,
        });
      }
  }
      
  return (
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
        <button className="login-clear-email-btn" onClick={() => setEmail("")}>
          Clear
        </button>
        <Loader onClick={signIn} />
      </div>
      <div>{user}</div>
    </div>
  );
};

export default Login;
