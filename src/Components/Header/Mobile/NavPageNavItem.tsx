import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../../helpers/types";

interface props {
  navButton: NavButton;
  index: number;
}

const NavPageNavItem: React.FC<props> = ({ navButton, index }) => {
  const navigate = useNavigate();
  return (
    <li className='nav-page_navBtn-item place-items_center'>
      <button onClick={() => navigate(`${navButton.navigate}`)}>
        {navButton.name}
      </button>
      {index === 2 ? (
        <span></span>
      ) : (
        <span className='nav-page-dot place-items_center'>・</span>
      )}
    </li>
  );
};

export default NavPageNavItem;
