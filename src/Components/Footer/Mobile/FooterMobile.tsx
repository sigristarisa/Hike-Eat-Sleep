import React from "react";
import iconInstagram from "../../../assets/icon_instagram.png";
import iconYoutube from "../../../assets/icon_youtube.png";
import "./FooterMobile.css";

const FooterMobile: React.FC = () => {
  return (
    <footer className='footer-mobile_container align-items_center'>
      <div className='footer-text-mobile_container'>
        <p>
          ©2020 ・ wanderfux ・<br></br> switzerland ・ Impressum
        </p>
      </div>
      <div className='grid-columns_two justify-items_center'>
        <div className='grid-colums_two-extend-two'>
          <div className='footer-social-media-icon-mobile_container '>
            <img src={iconInstagram} alt='instagram' />
          </div>
          <a href='https://www.instagram.com/by.wanderfux'>@by.wanderfux</a>
        </div>
        <div className='grid-colums_two-extend-two '>
          <div className='footer-social-media-icon-mobile_container '>
            <img src={iconYoutube} alt='youtube' />
          </div>
          <a href='https://www.youtube.com/channel/UCboUr2INTVh84ba0yoElbyw/featured'>
            @wanderfux
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
