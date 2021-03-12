import React from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <form className="searchbar-form">
        <input className="searchbar-input" placeholder="Search for a coin.." />
        <SearchIcon className="icon" />
      </form>
      <div className="searchbar-icons-container">
        <Avatar />
        <SettingsIcon className="icon" />
      </div>
    </div>
  );
};

export default Searchbar;
