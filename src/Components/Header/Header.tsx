import React from "react";
import NavButtonItem from "./NavButtonItem";
import { NavButton, WindowSize } from "../../helpers/types";
import "./Header.css";

interface props {
  setNavBtnId: Function;
  activateNavBtn: Function;
  windowSize: WindowSize;
}

const Header: React.FC<props> = ({
  setNavBtnId,
  activateNavBtn,
  windowSize,
}) => {
  const navButtonArr: NavButton[] = [
    { id: 0, name: "wanderfux", navigate: "../" },
    { id: 1, name: "about", navigate: "../about" },
    { id: 2, name: "blog", navigate: "../blog" },
    { id: 3, name: "shop", navigate: "../shop" },
  ];

  return (
    <header className='header_container justify-items_end'>
      <nav className='navbar_container place-items_center'>
        <ul className='grid-columns_four'>
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
    </header>
  );
};

export default Header;
