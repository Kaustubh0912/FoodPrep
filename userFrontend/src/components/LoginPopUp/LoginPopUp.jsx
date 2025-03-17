import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Sign Up"); // Consistent casing

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img src={assets.close} alt="Close" onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {curState !== "Log In" && <input type="text" placeholder="Name" required />} 
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="btn">{curState === "Sign Up" ? "Create Account" : "Login"}</button>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the <a href="/terms">terms</a> & <a href="/privacy">privacy policy</a>.
          </p>
        </div>

        <p>
          {curState === "Log In" ? (
            <>Don't have an account? <span onClick={() => setCurState("Sign Up")}>Sign Up</span></>
          ) : (
            <>Already have an account? <span onClick={() => setCurState("Log In")}>Log In</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopUp;
