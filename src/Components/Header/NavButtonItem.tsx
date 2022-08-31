import React from "react";
import { NavButton } from "../../helpers/types";

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
  return (
    <li className='navBtn-item'>
      <button
        className={`${activateNavBtn(index)}`}
        onClick={() => setNavBtnId(navButton.id)}
      >
        {navButton.name}
      </button>
    </li>
  );
};

export default NavButtonItem;
