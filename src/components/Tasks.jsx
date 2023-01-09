import React from "react";

import plus from "../assets/plus.png";
import { DefaultTaskItem } from "./DefaultTaskItem";
import { Task } from "./Task";

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
      <div className={styles.createdAndCompletedTasks}>
        <header className={styles.createdAndCompletedTasksContainer}>
          <strong className={styles.createdTasks}>
            Tarefas criadas <span>0</span>
          </strong>
          <strong className={styles.completedTasks}>
            Concluídas <span>0 de 5</span>
          </strong>
        </header>
      </div>
      <div className={styles.tasksWrapper}>
        <DefaultTaskItem />
      </div>
    </div>
  );
};
