import React from "react";
import "./authentication.css";
import { loginUrl } from "../../GoogleAuth";
import { connect } from "react-redux";
import { displaySignUpModal } from "../../Actions/authenticationAction";
import CloseIcon from "@material-ui/icons/Close";
import googleLogo from "../../images/googleLogo.png";

const SignUpModal = ({ setSignUpModal }) => {
  return (
    <div className="authentication">
      <div onClick={() => setSignUpModal()} className="authentication-close">
        <CloseIcon />
      </div>
      <h2>Sign Up</h2>
      <form className="authentication-form">
        <label>Email:</label>
        <input
          className="authentication-input"
          placeholder="Please Enter an Email Address"
          type="text"
        />
        <label>Password:</label>
        <input
          className="authentication-input"
          placeholder="Password.."
          type="password"
        />
        <label>Verify Password*:</label>
        <input
          className="authentication-input"
          placeholder="Please Verify Your Password"
          type="password"
        />
      </form>
      <p>Or..</p>
      <a href={loginUrl} className="authentication-google">
        <span> Sign In With </span>
        <img className="authentication-google-logo" src={googleLogo} alt="" />
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpModal: state.authentication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSignUpModal: () => dispatch(displaySignUpModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
