import React from "react";
import { Task } from "../types/Task";

type Props = {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
};

const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  return (
    <li
      style={{
        display: "flex",
        gap: "8px",
        border: "1px solid gray",
        padding: "5px 10px",
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <input checked={task.completed} onChange={onToggle} type="checkbox" />
        <span>{task.title}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
