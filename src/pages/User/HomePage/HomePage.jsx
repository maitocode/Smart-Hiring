import React from "react";
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomePageHiring from "./HomePageHiring/HomePageHiring";
import HomePageBenefits from "./HomePageBenefits/HomePageBenefits";
import HomePageAboutUs from "./HomePageAboutUs/HomePageAboutUs";
import HomePageBottom from "./HomePageBottom/HomePageBottom.jsx";

function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <HomePageHiring />
      <HomePageBenefits />
      <HomePageAboutUs />
      <HomePageBottom />
    </div>
  );
}

export default HomePage;
