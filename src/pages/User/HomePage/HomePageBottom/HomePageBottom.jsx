import React from "react";
import "./HomePageBottom.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomePageBottom() {
  return (
    <div className="footer">
      <div>
        <div className="footer-logo">
          <span>SmartHiring</span>
          <div className="footer-logo-link">
            <FacebookIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
        <div className="footer-quote">
          Leading Software Outsourcing Company in Vietnam. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default HomePageBottom;
