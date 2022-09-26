import React from "react";
import hikeEatSleepLogo from "../../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepHomeMobile from "../../../assets/HikeEatSleep_HomeMobile.png";
import "./HomepageMobile.css";

const HomePageMobile: React.FC = () => {
  console.log("hi");
  return (
    <main className='home-page-mobile_container'>
      <div className='home-mobile-logo-img_wrapper justify-items_center align-items_end'>
        <div className='home-mobile-logo_container'>
          <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
        </div>
        <div className='home-mobile-image_container justify-items_center align-items_end'>
          <img src={hikeEatSleepHomeMobile} alt='hike eat sleep home mobile' />
        </div>
      </div>
    </main>
  );
};

export default HomePageMobile;
