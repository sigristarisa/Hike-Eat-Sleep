import React from "react";
import NavPageNavItem from "./NavPageNavItem";
import { NavButton } from "../../../helpers/types";
import "./HeaderMobile.css";

const NavPage: React.FC = () => {
  const navButtonArr: NavButton[] = [
    { id: 0, name: "about", navigate: "../about" },
    { id: 1, name: "blog", navigate: "../blog" },
    { id: 2, name: "shop", navigate: "../shop" },
  ];
  return (
    <main className='nav-page_container place-items_center'>
      <nav>
        <ul>
          {navButtonArr.map((navButton, index) => (
            <NavPageNavItem key={index} navButton={navButton} index={index} />
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default NavPage;
