import React from "react";
import "./HomePageBottom.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomePageBottom() {
  return (
    <div className="footer">
      <h1>SmartHiring</h1>
      <div className="footer-link">
        <FacebookIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default HomePageBottom;
