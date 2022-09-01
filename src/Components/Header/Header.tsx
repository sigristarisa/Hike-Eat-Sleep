import React from "react";
import NavButtonItem from "./NavButtonItem";
import { NavButton } from "../../helpers/types";
import "./Header.css";

interface props {
  setNavBtnId: Function;
  activateNavBtn: Function;
}

const Header: React.FC<props> = ({ setNavBtnId, activateNavBtn }) => {
  const navButtonArr: NavButton[] = [
    { id: 0, name: "wanderfux", navigate: "../" },
    { id: 1, name: "about", navigate: "../about" },
    { id: 2, name: "blog", navigate: "../blog" },
    { id: 3, name: "shop", navigate: "../shop" },
  ];
  return (
    <nav className='header_container justify-items_end'>
      <ul className='navbar_container grid-columns_four place-items_center'>
        {navButtonArr.map((navButton, index) => (
          <NavButtonItem
            navButton={navButton}
            key={index}
            index={index}
            setNavBtnId={setNavBtnId}
            activateNavBtn={activateNavBtn}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Header;
