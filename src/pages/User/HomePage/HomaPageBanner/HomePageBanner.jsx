import { React, useState } from "react";
import "./HomePageBanner.scss";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Img1 from "../../../../assets/images/banner1.jpg";
import Img2 from "../../../../assets/images/banner2.jpg";
import Img3 from "../../../../assets/images/banner3.jpeg";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function HomePageBanner(props) {
  var items = [
    {
      img: Img1
    },
    {
      img: Img2
    },
    {
      img: Img3
    }
  ];

  return (
    <div className="banner">
      <div className="banner-quote">
        <div className="banner-quote-1">
          We’re proud to work with clients across the globe
        </div>
        <div className="banner-quote-2">OUTCOME DRIVEN </div>
        <div className="banner-quote-2">SOFTWARE</div>
      </div>
      <Carousel
        className="banner-carousel"
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        stopAutoPlayOnHover={true}
        indicatorContainerProps={{
          className: "banner-carousel-indicator"
        }}
        navButtonsProps={{
          className: "banner-carousel-nav-button"
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper className="banner-carousel-item">
      <img src={props.item.img} alt="" />
    </Paper>
  );
}

export default HomePageBanner;
