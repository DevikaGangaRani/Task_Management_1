import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const initialState: Task[] = [];
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task[]>) => action.payload,
    addTask: (state, action: PayloadAction<Task>) => [...state, action.payload],
    toggletask: (state, action: PayloadAction<number>) =>
      state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      ),
    deleteTask: (state, action: PayloadAction<number>) =>
      state.filter((task) => task.id !== action.payload),
  },
});

export const { setTask, addTask, toggletask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
