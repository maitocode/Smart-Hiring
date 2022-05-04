import React from "react";
import "./HomePageAboutUs.scss";

function HomePageAboutUs() {
  const AboutUsContent = [
    {
      name: "Service",
      detail: [
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        }
      ]
    },
    {
      name: "Technologys",
      detail: [
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        }
      ]
    },
    {
      name: "Division",
      detail: [
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        }
      ]
    }
  ];

  return (
    <div className="page-about-us">
      <h1>About Us</h1>
      <h2>
        Mission: Become essential to our customers by providing differentiated
        products and services to help them achieve their aspirations{" "}
      </h2>

      <div className="about-group-cards"></div>
    </div>
  );
}

export default HomePageAboutUs;
