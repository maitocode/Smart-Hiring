import React from "react";
import "./HomePageHeader.scss";
function HomePageHeader() {
  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#" id="hero">
              <h2>
                <span>S</span>haif <span>A</span>rfan
              </h2>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li>
                <a href="#" data-after="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" data-after="Services">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" data-after="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageHeader;
