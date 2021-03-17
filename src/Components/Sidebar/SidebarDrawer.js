import React, { useState, useEffect } from "react";
import "./sidebar.css";

// toggleOption handles opening passed down dispatchs from Sidebar component
const SidebarDrawer = ({ title, icon, toggleOption }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="sidebar-drawer"
      onClick={() => (toggleOption ? toggleOption() : null)}
    >
      <div
        onClick={() => setActive(!active)}
        className={`sidebar-drawer-container ${
          active && "sidebar-drawer-container-active"
        }`}
      >
        <div className="sidebar-drawer-container-overlay"></div>
        <div className="sidebar-drawer-icon">{icon}</div>
        <div className="sidebar-drawer-title">{title}</div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
