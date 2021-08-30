import React, { useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");

  const showLoading = () => {
    setTimeout(() => {
      sayHi();
    }, 2000);

    setLoading(true);
  };

  const sayHi = () => {
    setGreeting("Welcom, user!");
    setLoading(false);
  };

  return (
    <div>
      <button className="login-sign-in-btn" onClick={showLoading}>
        Sign In
      </button>
      <div className="loader-wrap">
        {loading && <div className="loader" />}
        {greeting && <div>{greeting}</div>}
      </div>
    </div>
  );
};

export default Loader;
