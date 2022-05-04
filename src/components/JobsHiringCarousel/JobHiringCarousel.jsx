import React from "react";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem/CarouselItem.jsx";
import { Paper } from "@mui/material";
import "./JobHiringCarousel.scss";

JobHiringCarousel.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default function JobHiringCarousel({ jobs }) {
  const amountJobInItem = 6;
  const carouselListItems = chunk(jobs, amountJobInItem);
  console.log(carouselListItems);

  return (
    <div className="hiring-carousel-jobs">
      <Carousel
        className="carousel-jobs"
        autoPlay={false}
        // indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={false}
        navButtonsProps={{ className: "carousel-jobs-button" }}
        indicatorIconButtonProps={{ className: "carousel-jobs-indicator" }}
      >
        {carouselListItems.map((jobItem, index) => (
          <CarouselItem jobItems={jobItem} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export function chunk(items, size) {
  const chunks = [];
  items = [].concat(...items);

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
}
