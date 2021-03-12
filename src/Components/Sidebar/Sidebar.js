import React from "react";
import "./sidebar.css";
import SidebarDrawer from "./SidebarDrawer";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SecurityIcon from "@material-ui/icons/Security";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Joshua Dinh</div>
      <SidebarDrawer
        title="Dashboard"
        icon={<HomeIcon className="sidebar-drawer-icon" />}
      />
      <SidebarDrawer
        title="Security"
        icon={<SecurityIcon className="sidebar-drawer-icon" />}
      />
      <SidebarDrawer
        title="Settings"
        icon={<SettingsApplicationsIcon className="sidebar-drawer-icon" />}
      />
      <SidebarDrawer
        title="Sign In"
        icon={<MeetingRoomIcon className="sidebar-drawer-icon" />}
      />
      <SidebarDrawer
        title="Sign Up"
        icon={<AssignmentIndIcon className="sidebar-drawer-icon" />}
      />
      <SidebarDrawer
        title="Log Out"
        icon={<ExitToAppIcon className="sidebar-drawer-icon" />}
      />
    </div>
  );
};

export default Sidebar;
