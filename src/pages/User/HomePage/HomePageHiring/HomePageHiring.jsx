import React from "react";
import JobHiringCarousel from "./../../../../components/JobsHiringCarousel/JobHiringCarousel";

export default function HomePageHiring() {
  return (
    <div className="hiring">
      <h1>we are hiring...</h1>
      <h3>Choose and fill information we will contact you within a week</h3>
      <JobHiringCarousel /> //
    </div>
  );
}
// PASS job to JobHiringCarousel to use this component
