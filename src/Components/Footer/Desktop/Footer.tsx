import React from "react";
import iconInstagram from "../../../assets/icon_instagram.svg";
import iconYoutube from "../../../assets/icon_youtube.svg";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className='grid-columns_two-extend-one'>
      <div className='footer-text_container align-items_center'>
        <p>©2020 ・ wanderfux ・ switzerland ・ Impressum</p>
      </div>
      <div className='footer-social-media_container grid-columns_two justify-items_end'>
        <div className='grid-colums_two-extend-two place-items_center bd-red'>
          <div className='footer-social-media-icon_container place-items_center'>
            <img src={iconInstagram} alt='instagram' />
          </div>
          <a href='https://www.instagram.com/by.wanderfux'>@by.wanderfux</a>
        </div>
        <div className='grid-colums_two-extend-two place-items_center  bd-red'>
          <div className='footer-social-media-icon_container place-items_center'>
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

export default Footer;
