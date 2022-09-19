import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderMobile.css";

const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();
  const [isNavPage, setIsNavPage] = useState<boolean>(false);

  const handleCloseBtn = (): void => {
    navigate("../");
    setIsNavPage(false);
  };

  const handleNavBtn = (): void => {
    navigate("../navi");
    setIsNavPage(true);
  };

  const setBackgroundColor = (): string => {
    return isNavPage
      ? "header-mobile_container red-background"
      : "header-mobile_container";
  };

  return (
    <header
      className={`${setBackgroundColor()} grid-columns_two align-items_center`}
    >
      <h1>wanderfux</h1>
      {isNavPage ? (
        <button className='justify-items_end' onClick={() => handleCloseBtn()}>
          CLOSE
        </button>
      ) : (
        <button className='justify-items_end' onClick={() => handleNavBtn()}>
          navi
        </button>
      )}
    </header>
  );
};

export default HeaderMobile;
