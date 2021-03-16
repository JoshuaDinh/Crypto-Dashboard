import React from "react";
import "./sidebar.css";
import SidebarDrawer from "./SidebarDrawer";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SecurityIcon from "@material-ui/icons/Security";
import ForwardIcon from "@material-ui/icons/Forward";
// Redux----------
import { displaySignUpModal } from "../../Actions/authenticationAction.js";
import { displaySignInModal } from "../../Actions/authenticationAction.js";
import { connect } from "react-redux";

const Sidebar = ({ selectedCoin, displaySignUpModal, displaySignInModal }) => {
  console.log(selectedCoin.isPending);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {selectedCoin.isPending || selectedCoin.searchedCoin === undefined ? (
          <div className="sidebar-header-loading">
            <ForwardIcon className="searchbar-arrow-icon" />
            <span> Search for CryptoCurrencies</span>
          </div>
        ) : (
          <div>
            <p>{selectedCoin.searchedCoin?.name}</p>
            <img
              className="sidebar-image"
              src={selectedCoin.searchedCoin?.image}
              alt=" #"
            />
          </div>
        )}
      </div>

      <SidebarDrawer title="Dashboard" icon={<HomeIcon className="icon" />} />
      <SidebarDrawer
        title="Security"
        icon={<SecurityIcon className="icon" />}
      />
      <SidebarDrawer
        title="Settings"
        icon={<SettingsApplicationsIcon className="icon" />}
      />
      <SidebarDrawer
        toggleOption={() => displaySignInModal(true)}
        title="Sign In"
        icon={<MeetingRoomIcon className="icon" />}
      />
      <SidebarDrawer
        toggleOption={() => displaySignUpModal(true)}
        title="Sign Up"
        icon={<AssignmentIndIcon className="icon" />}
      />
      <SidebarDrawer
        toggleOption={() => alert("alert")}
        title="Log Out"
        icon={<ExitToAppIcon className="icon" />}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
    signUpModal: state.signUpModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displaySignUpModal: () => dispatch(displaySignUpModal()),
    displaySignInModal: () => dispatch(displaySignInModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
