import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Loader from "./Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userPassword = (event) => {
    setPassword(event.target.value);
  };

  const signIn = () => {
    axios
      .post("http://localhost:3001/auth/sign-in", {
        email: email,
        password: password,
      })
      .then((response) => {
        setUser(response.data.email);
      });
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
