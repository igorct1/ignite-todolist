import React from "react";

import plus from "../assets/plus.png";

import styles from "./Tasks.module.css";

export const Tasks = () => {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Adicione uma nova tarefa.." />
        <button>
          Criar <img src={plus} alt="" />
        </button>
      </div>
    </div>
  );
};
