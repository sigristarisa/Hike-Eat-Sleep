import React from "react";
import iconInstagram from "../../assets/icon_instagram.png";
import iconYoutube from "../../assets/icon_youtube.png";

const Footer: React.FC = () => {
  return (
    <footer className='grid-columns_two-expand-one'>
      <div className='grid-columns_four'>
        <p>©2020 ・</p>
        <p>wanderfux ・</p>
        <p>switzerland ・</p>
        <p>Impressum</p>
      </div>
      <div>
        <div className='grid-columns_two'>
          <div>
            <img src={iconInstagram} alt='instagram' />
          </div>
          <a href='https://www.instagram.com/by.wanderfux'>@by.wanderfux</a>
        </div>
        <div className='grid-columns_two'>
          <div>
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
