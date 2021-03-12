import React from "react";
import "./sidebar.css";

const SidebarDrawer = ({ title, icon }) => {
  return (
    <div className="sidebar-drawer">
      <div className="sidebar-drawer-container">
        <div className="sidebar-drawer-icon">{icon}</div>
        <div className="sidebar-drawer-title">{title}</div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
