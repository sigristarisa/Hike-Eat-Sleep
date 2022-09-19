import React from "react";
import hikeEatSleepLogo from "../../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepHome from "../../../assets/HikeEatSleep_Home.png";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className='home-main_container justify-items_center align-items_end'>
      <div className='home-logo-img_wrapper'>
        <div className='home-logo_container'>
          <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
        </div>
        <div className='home-img_container  align-items_end justify-items_center'>
          <img src={hikeEatSleepHome} alt='hike eat sleep header' />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
