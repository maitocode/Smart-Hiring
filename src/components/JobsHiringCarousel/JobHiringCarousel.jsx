import React from "react";
import { Carousel } from "react-material-ui-carousel";
import PropTypes from "prop-types";
import JobCard from "./JobCard/JobCard";

const amountJobInItem = 6;
function JobHiringCarousel({ jobs }) {
  const carouselListItems = chunk(jobs, amountJobInItem);

  return (
    <div className="hiring-carousel-jobs">
      <Carousel
        className="carousel-jobs"
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={false}
        navButtonsProps={{ className: "hihi" }}
      >
        {carouselListItems.map((jobsItem, index) => {
          <CarouselItem jobs={jobsItem} key={index} />;
        })}
      </Carousel>
    </div>
  );
}

JobHiringCarousel.propTypes = { jobs: PropTypes.array };

function CarouselItem({ jobItems }) {
  return (
    <div className="jobs-carousel-item">
      {jobItems.map((job, index) => {
        return (
          <JobCard
            img={job.img}
            jobName={job.jobName}
            salary={job.salary}
            needed={job.needed}
            skill={job.skills}
            key={index}
          />
        );
      })}
    </div>
  );
}

function chunk(items, size) {
  const chunks = [];
  items = [].concat(...items);

  while (items.length) {
    chunks.push(items.splice(0, size));
  }

  return chunks;
}

JobHiringCarousel.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default JobHiringCarousel;
