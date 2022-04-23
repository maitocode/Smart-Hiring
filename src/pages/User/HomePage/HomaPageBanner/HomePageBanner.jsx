import { React, useState } from "react";
import "./HomePageBanner.scss";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Img1 from "../../../../assets/images/slider1.jpeg";
import Img2 from "../../../../assets/images/slider2.jpg";
import Img3 from "../../../../assets/images/slider3.jpeg";
import Img4 from "../../../../assets/images/slider4.jpg";

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
      img: Img1
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
        fullHeightHover={false}
        index={carouselIndex}
        navButtonsAlwaysVisible={true}
        NavButton={({ handlePrev, className, style, next, prev }) => {
          // Other logic

          return (
            <Button onClick={handlePrev} className={className} style={style}>
              {next && "Next"}
              {prev && "Previous"}
            </Button>
          );
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
    <Paper>
      <img src={props.item.img} alt="" />
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default HomePageBanner;
