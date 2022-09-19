import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../../helpers/types";

interface props {
  navButton: NavButton;
  index: number;
  setIsNavPage: Function;
}

const NavPageNavItem: React.FC<props> = ({
  navButton,
  index,
  setIsNavPage,
}) => {
  const navigate = useNavigate();
  const closeNavPage = (navBtn: NavButton): void => {
    setIsNavPage(false);
    navigate(navBtn.navigate);
  };
  return (
    <li className='nav-page_navBtn-item place-items_center'>
      <button onClick={() => closeNavPage(navButton)}>{navButton.name}</button>
      {index === 2 ? (
        <span></span>
      ) : (
        <span className='nav-page-dot place-items_center'>・</span>
      )}
    </li>
  );
};

export default NavPageNavItem;
