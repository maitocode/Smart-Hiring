import React from "react";
import JobHiringCarousel from "./../../../../components/JobsHiringCarousel/JobHiringCarousel";
import Avatar from "../../../../assets/images/avatar.jpeg";
import "./HomePageHiring.scss";

export default function HomePageHiring() {
  const jobs = [
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    },
    {
      img: Avatar,
      jobName: "jobA",
      salary: {
        from: 1000,
        to: 2000
      },
      needed: 5,
      skills: ["html", "css"]
    }
  ];

  return (
    <div className="hiring">
      <h1>we are hiring...</h1>
      <h2>Choose and fill information we will contact you within a week</h2>
      <JobHiringCarousel jobs={jobs} />
    </div>
  );
}
