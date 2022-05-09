import React from "react";
import UserHeader from "./UserHeader/UserHeader";
import HomePageHiring from "./HomePageHiring/HomePageHiring";
import HomePageBenefits from "./HomePageBenefits/HomePageBenefits";
import HomePageAboutUs from "./HomePageAboutUs/HomePageAboutUs";
import HomePageBottom from "./HomePageBottom/HomePageBottom.jsx";
import HomePageBanner from "./HomaPageBanner/HomePageBanner";
import ChatBox from "./../../../components/ChatBox/ChatBox";

function HomePage() {
  return (
    <div>
      <UserHeader />
      <ChatBox />
      <HomePageBanner />
      <HomePageHiring />
      <HomePageBenefits />
      <HomePageAboutUs />
      <HomePageBottom />
    </div>
  );
}

export default HomePage;
