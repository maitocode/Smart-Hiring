import React from "react";
import "./HomePageAboutUs.scss";
import MobileApp from "../../../../assets/images/Services/MobileApp.svg";
import BackEnd from "../../../../assets/images/Services/Backend.svg";
import IoT from "../../../../assets/images/Services/IoT.svg";
import MobileGame from "../../../../assets/images/Services/MobileGame.svg";
import QA from "../../../../assets/images/Services/QA.svg";
import WebApp from "../../../../assets/images/Services/WebApp.svg";
import Android from "../../../../assets/images/Technologys/Android.svg";
import Angular from "../../../../assets/images/Technologys/Angular.svg";
import IOS from "../../../../assets/images/Technologys/IOS.svg";
import Java from "../../../../assets/images/Technologys/Java.svg";
import NodeJs from "../../../../assets/images/Technologys/NodeJs.svg";
import PHP from "../../../../assets/images/Technologys/PHP.svg";
import Python from "../../../../assets/images/Technologys/Python.svg";
import REACT from "../../../../assets/images/Technologys/React.svg";
import VueJs from "../../../../assets/images/Technologys/VueJs.svg";
import Location from "../../../../assets/icons/location.svg";

function HomePageAboutUs() {
  const AboutUsData = [
    {
      name: "Services",
      detail: [
        {
          id: 0,
          img: MobileApp,
          name: "Mobile App Development"
        },
        {
          id: 1,
          img: BackEnd,
          name: "Backend Development"
        },
        {
          id: 2,
          img: IoT,
          name: "IoT"
        },
        {
          id: 3,
          img: MobileGame,
          name: "Mobile Game Development"
        },
        {
          id: 4,
          img: QA,
          name: "QA & Testing"
        },
        {
          id: 5,
          img: WebApp,
          name: "Web App Development"
        }
      ]
    },
    {
      name: "Technologys",
      detail: [
        {
          id: 6,
          img: Android,
          name: "Android"
        },
        {
          id: 7,
          img: Angular,
          name: "Angular"
        },
        {
          id: 8,
          img: IOS,
          name: "IOS"
        },
        {
          id: 9,
          img: Java,
          name: "Java"
        },
        {
          id: 10,
          img: NodeJs,
          name: "NodeJs"
        },
        {
          id: 11,
          img: PHP,
          name: "PHP"
        },
        {
          id: 12,
          img: Python,
          name: "Python"
        },
        {
          id: 13,
          img: REACT,
          name: "REACT"
        },
        {
          id: 14,
          img: VueJs,
          name: "VueJs"
        }
      ]
    },
    {
      name: "Divisions",
      detail: [
        {
          id: 15,
          img: Location,
          name: "Da nang"
        },
        {
          id: 16,
          img: Location,
          name: "Ho Chi Minh"
        },
        {
          id: 17,
          img: Location,
          name: "Ha Noi"
        }
      ]
    }
  ];

  const Services = AboutUsData[0];
  const Technologys = AboutUsData[1];
  const Divisions = AboutUsData[2];

  return (
    <div id="aboutUs" className="page-about-us">
      <h1>About Us</h1>
      <h2>
        Mission: Become essential to our customers by providing differentiated
        products and services to help them achieve their aspirations{" "}
      </h2>

      <div className="about-group-cards">
        <div className="about-group-cards-services">
          <div className="about-card-name">{Services.name}</div>
          <div className="about-card-details">
            {Services.detail.map((item) => (
              <div className="services-item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="services-item-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-group-cards-technologys">
          <div className="about-card-name">{Technologys.name}</div>
          <div className="about-card-details">
            {Technologys.detail.map((item) => (
              <div className="technologys-item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="technologys-item-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-group-cards-divisions">
          <div className="about-card-name">{Divisions.name}</div>
          <div className="about-card-details">
            {Divisions.detail.map((item) => (
              <div className="divisions-item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="divisions-item-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageAboutUs;
