import React from "react";
import "./authentication.css";
import { connect } from "react-redux";
import { displaySignUpModal } from "../../Actions/authenticationAction";
import CloseIcon from "@material-ui/icons/Close";

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
        <div className="authenticate-button">Sign Up</div>
      </form>
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
