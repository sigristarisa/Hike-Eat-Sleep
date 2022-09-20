import React from "react";
import FooterMobile from "../../Footer/Mobile/FooterMobile";
import hikeEatSleepLogo from "../../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepAboutMobile from "../../../assets/HikeEatSleep_AboutMobile.png";
import "./AboutPageMobile.css";

const AboutPageMobile: React.FC = () => {
  return (
    <div className='about-page-mobile_container place-items_center'>
      <main className='place-items_center'>
        <div className='about-text-mobile_container'>
          <p>about</p>
          <p>
            The scent of the wet woods. The dark clouds between the cold
            summits. Nesting myself at the bank of a lonely lake. I muffle the
            last bits of bread, while the warmth of the sun leaves from my face.
            All I do to recall those intangible joy are often forgotten –{" "}
            <br></br>hike, eat, sleep.
          </p>
          <p>wanderfux, switzerland</p>
        </div>
        <div className='about-mobile-logo-img_wrapper'>
          <div className='about-mobile-logo_container'>
            <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
          </div>
          <div className='about-mobile-image_container'>
            <img src={hikeEatSleepAboutMobile} alt='hike eat sleep about' />
          </div>
        </div>
      </main>
      <FooterMobile />
    </div>
  );
};

export default AboutPageMobile;
