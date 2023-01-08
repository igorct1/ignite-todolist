import React from "react";

import rocketLogo from "../assets/rocket.svg";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="" />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
};
