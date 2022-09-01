import React from "react";
import hikeEatSleepLogo from "../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepHeader from "../../assets/HikeEatSleep_Header.png";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <main className='home-main_container justify-items_center align-items_end'>
      <div className='home-logo_container'>
        <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
      </div>
      <div className='header-img_container  align-items_end'>
        <img src={hikeEatSleepHeader} alt='hike eat sleep header' />
      </div>
    </main>
  );
};

export default HomePage;
