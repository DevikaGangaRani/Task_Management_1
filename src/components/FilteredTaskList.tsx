import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTask, setTask, toggletask } from "../redux/taskSlice";
import { fetchTasks } from "../services/api";

type Props = {};

const FilteredTaskList = (props: Props) => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      dispatch(setTask(tasks));
    };
    loadTasks();
  }, []);

  const [filter, setFilter] = useState("all");
  const filterdTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.completed === (filter === "completed"));
  const handleToggle = (id: number) => {
    dispatch(toggletask(id));
  };
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      <ul
        style={{
          display: "flex",
          margin: "auto",
          width: "80%",
          padding: "20px 0px",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {filterdTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => handleToggle(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilteredTaskList;
