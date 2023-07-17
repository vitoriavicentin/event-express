import Link from "next/link";
import React, { useState } from "react";
import NavItems from "@/components/Nav/NavItems/NavItems";
import styles from "./NavBar.module.css"

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Details", href: "/details" },
  { text: "Map", href: "/map" },
  { text: "Confirm your presence", href: "/rsvp" }
];

const Navbar = () => {
  const [isNavActive, setNavActive] = useState(false);
  const [activeMenuItemIdx, setActiveMenuItemIdx] = useState(-1);

  const handleMenuItemClick = (idx) => {
    setActiveMenuItemIdx(idx);
    setNavActive(false);
  };

  const handleMenuToggle = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <span>
            <h1 className="logo"></h1>
          </span>
        </Link>
        <div onClick={handleMenuToggle} className={styles["nav__menu-bar"]}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={`${isNavActive ? styles.active : ""} ${styles["nav__menu-list"]}`}>
          {MENU_LIST.map((menu, idx) => (
            <div key={menu.text} onClick={() => handleMenuItemClick(idx)}>
              <NavItems active={activeMenuItemIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
