import React from "react";
import "./AuthBanner.scss";
// import kanjiLabel from "../../assets/images/kanji-label.png";
import logo_smd from "assets/images/logo_smd.svg";

const AuthBanner = () => {
  return (
    <div className="auth-banner">
      <div className="labelWrapper">
        <div className="label">
          <img src={logo_smd} alt="" className="logo" />
        </div>
      </div>
      <p className="slogan">
        Internal Communities coming together <b /> by matching Capability with
        Opportunity
      </p>
    </div>
  );
};

export default AuthBanner;
