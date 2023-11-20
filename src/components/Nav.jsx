import React, { useState } from "react";
import nav from "../css/nav.module.css";
import { FaHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Nav = () => {
  const [IsActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!IsActive);
  };
  return (
    <nav className={nav.nav__container}>
      <div className={nav.nav__logo}>
        <h1>PitchKit</h1>
      </div>
      <div className={nav.nav__links}>
        <ul>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
      </div>

      <div className={nav.right__side}>
        <div className={nav.icons__container}>
          <div className={nav.search__container}>
            {IsActive ? (
              <motion.div
                animate={{
                  x: -200,
                  opacity: 1,
                  zIndex: 1,
                }}
                transition={{ duration: 0.2 }}
                className={nav.search__bar}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className={nav.active}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  y: "-50%",
                  x: -200,
                  opacity: 0,
                  zIndex: -1,
                }}
                animate={{
                  x: -100,
                }}
                transition={{ duration: 0.2 }}
                className={nav.search__bar}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className={nav.active}
                />
              </motion.div>
            )}
          </div>
          <div className={nav.icons}>
            {IsActive ? (
              <RxCross2
                className={nav.icon}
                onClick={toggleSearch}
                style={{ color: "red" }}
              />
            ) : (
              <FaSearch className={nav.icon} onClick={toggleSearch} />
            )}
            <FaHeart className={nav.icon} />
            <FaShoppingBag className={nav.icon__shopping__bag} />

            <div className={nav.shopping__bag__notification}></div>
          </div>
        </div>

        <div className={nav.account__container}>
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
