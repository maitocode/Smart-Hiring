import React from "react";
import PropTypes from "prop-types";

function JobCard({ img, jobName, salary, needed, skills }) {
  return (
    <div className="job-card">
      <img src={img} alt="" />
      <h2>{jobName}</h2>
      <div className="salary">
        $ {salary.from} upto {salary.to}
      </div>
      <h3>Needed: {needed}</h3>
      <h3>Skills: {skills.join()}</h3>
    </div>
  );
}

JobCard.propTypes = {
  img: PropTypes.string,
  jobName: PropTypes.string,
  salary: PropTypes.object,
  needed: PropTypes.number,
  skills: PropTypes.array
};

export default JobCard;
