import { React, useState } from "react";
import "./HomePageBanner.scss";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Img1 from "../../../../assets/images/slider1.jpeg";
import Img2 from "../../../../assets/images/slider2.jpg";
import Img3 from "../../../../assets/images/slider3.jpeg";
import Img4 from "../../../../assets/images/slider4.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function HomePageBanner(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: Img1
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: Img2
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: Img3
    }
  ];

  return (
    <div className="banner">
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
      <div className="banner-carousel-item-description">
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button className="CheckButton">Check it out!</Button>
      </div>
    </Paper>
  );
}

export default HomePageBanner;
