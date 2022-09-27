import React from "react";
import Footer from "../../Footer/Desktop/Footer";
import hikeEatSleepLogo from "../../../assets/HikeEatSleep_Logo.png";
import hikeEatSleepAbout from "../../../assets/HikeEatSleep_About.png";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className='about-page_container place-items_center'>
      <main className='place-items_center'>
        <div className='about-text_container'>
          <p className='about-wanderfux-text'>about</p>
          <p>
            The scent of the wet woods. The dark clouds between the cold
            summits. Nesting myself at the bank of a lonely lake. I muffle the
            last bits of bread, while the warmth of the sun leaves from my face.
            All I do to recall those intangible joy are often forgotten – hike,
            eat, sleep.
          </p>
          <p className='about-wanderfux-text'>wanderfux, switzerland</p>
        </div>
        <div className='about-logo-img_wrapper'>
          <div className='about-logo_container'>
            <img src={hikeEatSleepLogo} alt='hike eat sleep logo' />
          </div>
          <div className='about-img_container'>
            <img src={hikeEatSleepAbout} alt='hike eat sleep about' />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
