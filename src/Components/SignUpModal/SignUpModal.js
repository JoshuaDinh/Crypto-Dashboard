import React from "react";
import "./signUpModal.css";
import googleLogo from "../../images/googleLogo.png";

const SignUpModal = () => {
  return (
    <div className="signUpModal">
      <h2>Sign Up</h2>
      <form className="signUpModal-form">
        <label>Email:</label>
        <input
          className="signUpModal-input"
          placeholder="Please Enter an Email Address"
          type="text"
        />
        <label>Password:</label>
        <input
          className="signUpModal-input"
          placeholder="Password.."
          type="password"
        />
        <label>Verify Password*:</label>
        <input
          className="signUpModal-input"
          placeholder="Please Verify Your Password"
          type="password"
        />
      </form>
      <p>Or..</p>
      <div className="signUpModal-google">
        <span> Sign In With </span>
        <img className="signupModal-google-logo" src={googleLogo} alt="" />
      </div>
    </div>
  );
};

export default SignUpModal;
