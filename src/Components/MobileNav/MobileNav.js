import React from "react";
import "./mobileNav.css";
import SidebarDrawer from "../Sidebar/SidebarDrawer";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import TableChartIcon from "@material-ui/icons/TableChart";
import ForwardIcon from "@material-ui/icons/Forward";
import AnnouncementIcon from "@material-ui/icons/Announcement";
// Redux----------
import { displaySignUpModal } from "../../Actions/authenticationAction.js";
import { displaySignInModal } from "../../Actions/authenticationAction.js";
import { selectSidebarLink } from "../../Actions/selectSidebarLink.js";
import { mobileNav } from "../../Actions/mobileNavAction.js";
import { connect } from "react-redux";

const MobileNav = ({
  displaySignUpModal,
  displaySignInModal,
  selectSidebarLink,
  selectedLink,
  googleAuthToken,
  setMobileNav,
}) => {
  return (
    <div className="mobileNav">
      <SidebarDrawer
        selectedLink={selectedLink}
        selectSidebarLink={() => selectSidebarLink("Dashboard")}
        title="Dashboard"
        linkId="dataCard"
        icon={<HomeIcon className="icon" />}
        mobileNav={mobileNav}
        setMobileNav={() => setMobileNav(!mobileNav)}
      />
      <SidebarDrawer
        selectedLink={selectedLink}
        selectSidebarLink={() => selectSidebarLink("Table")}
        linkId="table"
        title="Table"
        icon={<TableChartIcon className="icon" />}
        mobileNav={mobileNav}
        setMobileNav={() => setMobileNav(!mobileNav)}
      />
      <SidebarDrawer
        selectedLink={selectedLink}
        selectSidebarLink={() => selectSidebarLink("News")}
        linkId="newsCard"
        title="News"
        icon={<AnnouncementIcon className="icon" />}
        mobileNav={mobileNav}
        setMobileNav={() => setMobileNav(!mobileNav)}
      />
      <SidebarDrawer
        selectedLink={selectedLink}
        selectSidebarLink={() => selectSidebarLink("Settings")}
        title="Settings"
        icon={<SettingsApplicationsIcon className="icon" />}
        mobileNav={mobileNav}
        setMobileNav={() => setMobileNav(!mobileNav)}
      />
      {googleAuthToken ? (
        <SidebarDrawer
          selectedLink={selectedLink}
          selectSidebarLink={() => selectSidebarLink("Log Out")}
          toggleOption={() => alert("alert")}
          title="Log Out"
          icon={<ExitToAppIcon className="icon" />}
          mobileNav={mobileNav}
          setMobileNav={() => setMobileNav(!mobileNav)}
        />
      ) : (
        <>
          <SidebarDrawer
            selectedLink={selectedLink}
            selectSidebarLink={() => selectSidebarLink("Sign In")}
            toggleOption={() => displaySignInModal(true)}
            title="Sign In"
            icon={<MeetingRoomIcon className="icon" />}
            mobileNav={mobileNav}
            setMobileNav={() => setMobileNav(!mobileNav)}
          />
          <SidebarDrawer
            selectedLink={selectedLink}
            selectSidebarLink={() => selectSidebarLink("Sign Up")}
            toggleOption={() => displaySignUpModal(true)}
            title="Sign Up"
            icon={<AssignmentIndIcon className="icon" />}
            mobileNav={mobileNav}
            setMobileNav={() => setMobileNav(!mobileNav)}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
    signUpModal: state.signUpModal,
    selectedLink: state.selectSidebarLink,
    googleAuthToken: state.googleAuthToken,
    mobileNav: state.mobileNav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displaySignUpModal: () => dispatch(displaySignUpModal()),
    displaySignInModal: () => dispatch(displaySignInModal()),
    selectSidebarLink: (text) => dispatch(selectSidebarLink(text)),
    setMobileNav: () => dispatch(mobileNav()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
