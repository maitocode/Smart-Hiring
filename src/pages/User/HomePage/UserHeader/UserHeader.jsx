import React, { useState } from "react";
import { AppBar } from "@mui/material";
import "./UserHeader.scss";
import SearchBar from "material-ui-search-bar";
import Logo from "../../../../assets/images/logo.png";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

function UserHeader() {
  const [searchValue, setSearchValue] = useState("");

  const doSomethingWith = (value) => {
    console.log(value);
  };
  return (
    <section className="header">
      <div className="header-logo">
        {/* <a href="#"> */}
        <img src={Logo} alt="" />
        {/* </a> */}
      </div>
      <SearchBar
        className="header-search"
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
        onRequestSearch={() => doSomethingWith(searchValue)}
        placeholder="Search for Job"
      />
      <div className="header-quick-access">
        <ul>
          <li>
            <a href="#hiring">Jobs</a>{" "}
          </li>
          <li>
            <a href="#benefit">Benefits</a>
          </li>
          <li>
            <a href="#aboutUs">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UserHeader;
