import React, { useState } from "react";
import { AppBar } from "@mui/material";
import "./HomePageHeader.scss";
import SearchBar from "material-ui-search-bar";

function HomePageHeader() {
  const [searchValue, setSearchValue] = useState("");

  const doSomethingWith = (value) => {
    console.log(value);
  };
  return (
    <div className="header-bar">
      <SearchBar
        className="header-bar-search"
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
        onRequestSearch={() => doSomethingWith(this.state.value)}
      />
    </div>
  );
}

export default HomePageHeader;
