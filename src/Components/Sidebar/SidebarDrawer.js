import React from "react";
import "./sidebar.css";

// toggleOption handles opening passed down dispatchs from Sidebar component
const SidebarDrawer = ({ title, icon, toggleOption }) => {
  return (
    <div
      className="sidebar-drawer"
      onClick={() => (toggleOption ? toggleOption() : null)}
    >
      <div className="sidebar-drawer-container">
        <div className="sidebar-drawer-icon">{icon}</div>
        <div className="sidebar-drawer-title">{title}</div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
