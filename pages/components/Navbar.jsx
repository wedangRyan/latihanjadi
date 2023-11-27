import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from './Logo';
import NavItem from "./NavItem";
import './Navbar.module.scss';

const MENU_LIST = [
  { text: "SALES COMPENSATION", href: "/ambil.json" },
  { text: "REGISTER", href: "/ambil.json" },
  { text: "SWAP", href: "/" },
  { text: "CONNECT WALLET", href: "/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
      <h4 className={`nav_dul`}>JustSigNow</h4>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div 
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;