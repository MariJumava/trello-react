import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Loader from "./Loader";
import { ACTION_TYPES } from "../../redux/Consts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userPassword = (event) => {
    setPassword(event.target.value);
  };

  const signIn = async () => {
    try {
      dispatch({
        type: ACTION_TYPES.LOGIN_START,
      });

      const responce = await axios.get("http://localhost:3000/users");
      const users = responce.data;

      const loginUser = users.filter((x) => x.email == email);
      if (loginUser && loginUser.password === password) {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: responce.loginUser,
        });
      } else {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAILURE,
          payload: "Wrong email or password.",
        });
      }
    } catch (err) {
      console.log("error", err);
      dispatch({
        type: ACTION_TYPES.LOGIN_FAILURE,
        payload: "Something is wrong!",
      });
    }
  };

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
        <button className="login-clear-email-btn" onClick={() => signIn}>
          Clear
        </button>
        <Loader onClick={signIn} />
      </div>
    </div>
  );
};

export default Login;
