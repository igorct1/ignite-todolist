import React from "react";

import trash from "../assets/trash.png";

import styles from "./Task.module.css";

export const Task = () => {
  return (
    <div className={styles.cardTask}>
      <button className={styles.cardCheck}></button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        repudiandae eos reiciendis quasi distinctio pariatur?
      </p>
      <img src={trash} alt="" />
    </div>
  );
};
