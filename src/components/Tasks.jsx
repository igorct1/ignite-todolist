import React from "react";
import { v4 as uuidv4 } from "uuid";
import plus from "../assets/plus.png";
import { DefaultTaskItem } from "./DefaultTaskItem";
import { Task } from "./Task";

import styles from "./Tasks.module.css";

export const Tasks = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: uuidv4(),
      title: "Estudar React.js na Rocketseat!",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      title: "Estudar TypeScript",
      isCompleted: false,
    },
  ]);
  const [newTask, setNewTask] = React.useState("");
  const completedTasks = tasks.reduce((acc, item) => {
    if (item.isCompleted) {
      acc++;
    }
    return acc;
  }, 0);

  function handleNewTask({ target }) {
    setNewTask(target.value);
  }

  function onAddTask() {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isCompleted: false,
      },
    ]);
    setNewTask("");
  }

  function onSelect(taskId) {
    const newTaskList = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(newTaskList);
  }

  function onDelete(taskId) {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskList);
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa.."
          value={newTask}
          onChange={handleNewTask}
        />
        {newTask.length > 0 ? (
          <button onClick={onAddTask}>
            Criar <img src={plus} alt="" />
          </button>
        ) : (
          <button disabled onClick={onAddTask}>
            Criar <img src={plus} alt="" />
          </button>
        )}
      </div>
      <div className={styles.createdAndCompletedTasks}>
        <header className={styles.createdAndCompletedTasksContainer}>
          <strong className={styles.createdTasks}>
            Tarefas criadas <span>{tasks.length}</span>
          </strong>
          <strong className={styles.completedTasks}>
            Concluídas{" "}
            <span>
              {completedTasks} de {tasks.length}
            </span>
          </strong>
        </header>
      </div>
      <div className={styles.tasksWrapper}>
        {tasks.length ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setTasks={setTasks}
              onSelect={onSelect}
              onDelete={onDelete}
              isCompleted={task.isCompleted}
            />
          ))
        ) : (
          <DefaultTaskItem />
        )}
      </div>
    </div>
  );
};
