import React from "react";

import clipboard from "../assets/clipboard.png";

import styles from "./DefaultTaskItem.module.css";

export const DefaultTaskItem = () => {
  return (
    <div className={styles.defaultContainer}>
      <img src={clipboard} />
      <strong>Você ainda não possui tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
