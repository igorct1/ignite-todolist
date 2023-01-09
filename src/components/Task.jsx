import { Check, Trash } from "phosphor-react";
import React from "react";

import trash from "../assets/trash.svg";

import styles from "./Task.module.css";

export const Task = ({ task, onSelect, onDelete, isCompleted }) => {
  function handleSelectedTask() {
    onSelect(task.id);
  }

  function handleDeleteTask() {
    onDelete(task.id);
  }

  return (
    <div className={styles.cardTask}>
      <div className={styles.checked}>
        <button
          onClick={handleSelectedTask}
          className={
            !isCompleted ? styles.normalButton : styles.completedButton
          }
        >
          {isCompleted ? <Check size={15} /> : null}
        </button>
      </div>
      <p
        onClick={handleSelectedTask}
        className={!isCompleted ? styles.normalItem : styles.selectedItem}
      >
        {task.title}
      </p>
      <button
        className={styles.deleteButton}
        src={trash}
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  );
};
