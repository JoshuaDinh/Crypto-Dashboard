import React from "react";
import "./sidebar.css";
import SidebarDrawer from "./SidebarDrawer";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SecurityIcon from "@material-ui/icons/Security";
import { connect } from "react-redux";

const Sidebar = ({ selectedCoin }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p>{selectedCoin.searchedCoin?.name}</p>
        <img
          className="sidebar-image"
          src={selectedCoin.searchedCoin?.image}
          alt=" #"
        />
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
        title="Sign In"
        icon={<MeetingRoomIcon className="icon" />}
      />
      <SidebarDrawer
        title="Sign Up"
        icon={<AssignmentIndIcon className="icon" />}
      />
      <SidebarDrawer
        title="Log Out"
        icon={<ExitToAppIcon className="icon" />}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
  };
};

export default connect(mapStateToProps)(Sidebar);
