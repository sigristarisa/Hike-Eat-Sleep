import React from "react";
import iconInstagram from "../../../assets/icon_instagram.png";
import iconYoutube from "../../../assets/icon_youtube.png";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className='grid-columns_two-extend-one'>
      <div className='footer-text_container'>
        <p>©2020 ・ wanderfux ・ switzerland ・ Impressum</p>
      </div>
      <div className='footer-social-media_container grid-columns_two justify-items_end'>
        <div className='grid-columns_two place-items_center'>
          <div className='footer-social-media-icon_container'>
            <img src={iconInstagram} alt='instagram' />
          </div>
          <a href='https://www.instagram.com/by.wanderfux'>@by.wanderfux</a>
        </div>
        <div className='grid-columns_two place-items_center'>
          <div className='footer-social-media-icon_container'>
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
