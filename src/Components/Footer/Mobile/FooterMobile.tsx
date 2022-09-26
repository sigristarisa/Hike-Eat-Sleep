import React from "react";
import iconInstagram from "../../../assets/icon_instagram.svg";
import iconYoutube from "../../../assets/icon_youtube.svg";
import "./FooterMobile.css";

const FooterMobile: React.FC = () => {
  return (
    <footer className='footer-mobile_container align-items_center'>
      <div className='footer-text-mobile_container'>
        <p>
          ©2020 ・ wanderfux ・<br></br> switzerland ・ Impressum
        </p>
      </div>
      <div className='footer-social-media-mobile_wrapper grid-columns_two place-items_center'>
        <div className='footer-social-media-mobile_container grid-colums_two-extend-two align-items_center'>
          <div className='footer-social-media-icon-mobile_container instagram  place-items_center'>
            <img src={iconInstagram} alt='instagram' />
          </div>
          <a href='https://www.instagram.com/by.wanderfux'>@by.wanderfux</a>
        </div>
        <div className='footer-social-media-mobile_container grid-colums_two-extend-two align-items_center'>
          <div className='footer-social-media-icon-mobile_container youtube place-items_center'>
            <img src={iconYoutube} alt='youtube' />
          </div>
          <a
            className='align-items_center'
            href='https://www.youtube.com/channel/UCboUr2INTVh84ba0yoElbyw/featured'
          >
            @wanderfux
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
