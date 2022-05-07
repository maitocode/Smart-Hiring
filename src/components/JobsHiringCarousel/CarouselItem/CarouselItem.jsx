import React from "react";
import { Paper } from "@mui/material";
import JobCard from "../JobCard/JobCard";
import "./CarouselItem.scss";

import PropTypes from "prop-types";

export default function CarouselItem({ jobItems }) {
  return (
    <Paper className="jobs-carousel-item" elevation={0}>
      {jobItems.map((job, index) => (
        <JobCard jobInfo={job} key={index} />
      ))}
    </Paper>
  );
}

CarouselItem.propTypes = {
  jobItems: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      jobName: PropTypes.string
    })
  )
};
