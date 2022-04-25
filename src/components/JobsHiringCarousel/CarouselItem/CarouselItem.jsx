import React from "react";
import { Paper } from "@mui/material";
import JobCard from "../JobCard/JobCard";

export default function CarouselItem({ jobItems }) {
  console.log("carouselItem");
  console.log(jobItems);
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
      <h1>hihi</h1>
      <h2>hehe</h2>
    </Paper>
  );
}
