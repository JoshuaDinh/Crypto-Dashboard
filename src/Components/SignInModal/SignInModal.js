import React from "react";
import "./signInModal.css";
import { loginUrl } from "../../GoogleAuth";

import googleLogo from "../../images/googleLogo.png";

const SignInModal = () => {
  return (
    <div className="signInModal">
      <h2>Sign In</h2>
      <form className="signInModal-form">
        <label>Email:</label>
        <input
          className="signInModal-input"
          placeholder="Please Enter an Email Address"
          type="text"
        />
        <label>Password:</label>
        <input
          className="signInModal-input"
          placeholder="Password.."
          type="password"
        />
      </form>
      <p>Or..</p>
      <a href={loginUrl} className="signInModal-google">
        <span> Sign In With </span>
        <img className="signInModal-google-logo" src={googleLogo} alt="" />
      </a>
    </div>
  );
};

export default SignInModal;
