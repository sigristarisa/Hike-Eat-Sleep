import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderMobile.css";

const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className='header-mobile_container grid-columns_two align-items_center'>
      <h1>wanderfux</h1>
      <button className='justify-items_end' onClick={() => navigate("../navi")}>
        navi
      </button>
    </header>
  );
};

export default HeaderMobile;
