import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderMobile.css";

interface props {
  isNavPage: boolean;
  setIsNavPage: Function;
}

const HeaderMobile: React.FC<props> = ({ isNavPage, setIsNavPage }) => {
  const navigate = useNavigate();

  const closeNavPage = (): void => {
    setIsNavPage(false);
  };

  const openNavPage = (): void => {
    setIsNavPage(true);
  };

  const handleWanderfuxBtn = (): void => {
    navigate("../");
    setIsNavPage(false);
  };

  return (
    <header className='header-mobile_container grid-columns_two align-items_center'>
      <h1 onClick={() => handleWanderfuxBtn()}>wanderfux</h1>
      {isNavPage ? (
        <button className='justify-items_end' onClick={() => closeNavPage()}>
          CLOSE
        </button>
      ) : (
        <button className='justify-items_end' onClick={() => openNavPage()}>
          navi
        </button>
      )}
    </header>
  );
};

export default HeaderMobile;
