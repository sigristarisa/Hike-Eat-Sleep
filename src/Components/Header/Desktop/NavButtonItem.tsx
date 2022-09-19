import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../../helpers/types";

interface props {
  navButton: NavButton;
  index: number;
  setNavBtnId: Function;
  activateNavBtn: Function;
}

const NavButtonItem: React.FC<props> = ({
  navButton,
  index,
  setNavBtnId,
  activateNavBtn,
}) => {
  const navigate = useNavigate();

  const handleOnClick = (id: number, navigateTo: string): void => {
    setNavBtnId(id);
    navigate(navigateTo);
  };
  return (
    <li className='navBtn-item grid-columns_two place-items_center'>
      <button
        className={`${activateNavBtn(index)}`}
        onClick={() => handleOnClick(navButton.id, navButton.navigate)}
      >
        {navButton.name}
      </button>
      {index === 3 ? (
        <span></span>
      ) : (
        <span className='dot place-items_center'>・</span>
      )}
    </li>
  );
};

export default NavButtonItem;
