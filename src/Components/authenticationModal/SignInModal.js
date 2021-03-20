import React from "react";
import "./authentication.css";
import { loginUrl } from "../../GoogleAuth";
import { connect } from "react-redux";
import { displaySignInModal } from "../../Actions/authenticationAction";
import CloseIcon from "@material-ui/icons/Close";
import googleLogo from "../../images/googleLogo.png";

const SignInModal = ({ setSignInModal }) => {
  return (
    <div className="authentication">
      <div onClick={() => setSignInModal()} className="authentication-close">
        <CloseIcon />
      </div>
      <h2>Sign In</h2>
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
    signInModal: state.authentication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSignInModal: () => dispatch(displaySignInModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);