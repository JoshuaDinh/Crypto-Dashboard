import React from "react";
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
  mobileNav,
  setMobileNav,
}) => {
  // Allows Closing of Mobile Nav when SignIn&SignUp links are clicked / Handles Sidebar toggle Options
  const toggleOptions = () => {
    if (toggleOption) {
      toggleOption();
    }
    if (mobileNav) {
      setMobileNav(!mobileNav);
    }
  };

  return (
    <Link
      to={linkId}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="sidebar-drawer"
      onClick={() => toggleOptions()}
    >
      <div
        onClick={() => selectSidebarLink()}
        className={`sidebar-drawer-container ${
          selectedLink === title && "sidebar-drawer-container-active"
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
