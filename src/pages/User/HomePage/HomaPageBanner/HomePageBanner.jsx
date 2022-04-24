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
      name: "Random Name #2",
      description: "Hello World!",
      img: Img2
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: Img3
    }
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = (caroIndexSet) => {
    console.log("prev click");
    setCarouselIndex(caroIndexSet);
  };

  return (
    <div className="banner">
      <Carousel
        className="banner-carousel"
        index={carouselIndex}
        autoPlay={true}
        navButtonsAlwaysVisible={true}
        animation="fade"
        cycleNavigation={true}
        stopAutoPlayOnHover={true}
        indicatorIconButtonProps={{
          className: "banner-carousel-indicator"
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
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default HomePageBanner;
