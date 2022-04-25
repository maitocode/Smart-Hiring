import React from "react";
import JobCard from "../components/JobsHiringCarousel/JobCard/JobCard";
import Avatar from "../assets/images/avatar.jpeg";

function Testpage() {
  const job = {
    img: Avatar,
    jobName: "jobA",
    salary: {
      from: 1000,
      to: 2000
    },
    needed: 5,
    skills: ["html", "css"]
  };
  return <JobCard {...job} />;
}

export default Testpage;
