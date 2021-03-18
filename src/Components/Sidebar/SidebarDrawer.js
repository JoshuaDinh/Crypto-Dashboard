import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-scroll";

// toggleOption handles opening passed down dispatchs from Sidebar component
const SidebarDrawer = ({
  title,
  icon,
  toggleOption,
  linkId,
  selectedLink,
  selectSidebarLink,
}) => {
  return (
    <Link
      to={linkId}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="sidebar-drawer"
      onClick={() => (toggleOption ? toggleOption() : null)}
    >
      <div
        onClick={() => selectSidebarLink()}
        className={`sidebar-drawer-container ${
          selectedLink == title && "sidebar-drawer-container-active"
        }`}
      >
        <div className="sidebar-drawer-container-overlay"></div>
        <div className="sidebar-drawer-icon">{icon}</div>
        <div className="sidebar-drawer-title">{title}</div>
      </div>
    </Link>
  );
};

export default SidebarDrawer;
