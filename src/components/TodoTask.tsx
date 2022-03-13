import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;

}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
        <span>{task.date}</span>
        <span>{task.time}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        done
      </button>
  
    </div>
  );
};

export default TodoTask;