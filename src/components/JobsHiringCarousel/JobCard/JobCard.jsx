import React from "react";
import PropTypes from "prop-types";
import "./JobCard.scss";
import { Avatar } from "@mui/material";

export default function JobCard({ jobInfo }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <Avatar
          sx={{ width: 70, height: 70, margin: "10px" }}
          src={jobInfo.img}
          alt=""
        />
        <h2 className="job-card-header-name">{jobInfo.jobName}</h2>
      </div>
      <div className="job-card-body">
        <h3 className="job-card-salary">
          $ {jobInfo.salary.from} upto {jobInfo.salary.to}
        </h3>
        <h3 className="job-card-needed">Needed: {jobInfo.needed}</h3>
        <h3 className="job-card-skills">Skills: {jobInfo.skills.join()}</h3>
      </div>
      <div className="job-card-footer">
        <h4 className="job-card-footer-note">{jobInfo.note}</h4>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  jobInfo: PropTypes.shape({
    img: PropTypes.string,
    jobName: PropTypes.string,
    salary: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number
    }),
    needed: PropTypes.number,
    skills: PropTypes.array,
    note: PropTypes.string
  }).isRequired
};
