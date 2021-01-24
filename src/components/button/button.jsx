import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onClick }) => (
  <button className={styles.button} onClcik={onClick}>
    {name}
  </button>
);

export default Button;
