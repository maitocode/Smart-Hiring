import React from "react";
import { Paper } from "@mui/material";
import JobCard from "../JobCard/JobCard";
import "./CarouselItem.scss";

export default function CarouselItem({ jobItems }) {
  return (
    <Paper className="jobs-carousel-item">
      {/* {jobItems.map((job, index) => {
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
    })} */}
      hehe
    </Paper>
  );
}
