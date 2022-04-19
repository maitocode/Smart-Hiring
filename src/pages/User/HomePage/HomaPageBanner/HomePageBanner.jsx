import React from "react";
import "./HomePageBanner.scss";

function HomePageBanner() {
  return (
    <div className="banner">
      <h1>
        Hello, <span></span>
      </h1>
      <h1>
        My name is <span></span>
      </h1>
      <h1>
        Quyet<span></span>
      </h1>
      <a id="hehe" href="#projects" type="button" className="cta">
        Portfolio
      </a>
    </div>
  );
}

export default HomePageBanner;
