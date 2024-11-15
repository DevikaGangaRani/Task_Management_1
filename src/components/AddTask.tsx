import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../services/api";
import { addTask } from "../redux/taskSlice";

interface Props {}

const AddTask = (props: Props) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = async () => {
    if (title.trim()) {
      const newTask = await createTask({ id: 0, title, completed: false });
      dispatch(addTask(newTask));
      setTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
