import React from "react";
import "./HeaderMobile.css";

const HeaderMobile: React.FC = () => {
  return (
    <header className='header-mobile_container grid-columns_two align-items_center'>
      <h1>wanderfux</h1>
      <button className='justify-items_end'>navi</button>
    </header>
  );
};

export default HeaderMobile;
