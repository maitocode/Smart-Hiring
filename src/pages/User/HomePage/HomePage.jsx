import React from "react";
import UserHeader from "./UserHeader/UserHeader";
import HomePageHiring from "./HomePageHiring/HomePageHiring";
import HomePageBenefits from "./HomePageBenefits/HomePageBenefits";
import HomePageAboutUs from "./HomePageAboutUs/HomePageAboutUs";
import HomePageBottom from "./HomePageBottom/HomePageBottom.jsx";
import HomePageBanner from "./HomaPageBanner/HomePageBanner";

function HomePage() {
  return (
    <div>
      {/* <UserHeader /> */}
      <HomePageBanner />
      <HomePageHiring />
      <HomePageBenefits />
      <HomePageAboutUs />
      <HomePageBottom />
    </div>
  );
}

export default HomePage;
