import React from "react";
import styles from "./HeaderCartButton.module.css";
import Carticon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <spa className={styles.icon}>
        <Carticon />
      </spa>
      <spa>Your Cart</spa>
      <spa className={styles.badge}>3</spa>
    </button>
  );
};

export default HeaderCartButton;
