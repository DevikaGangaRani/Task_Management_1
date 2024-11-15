import axios from "axios";
import { Task } from "../types/Task";

const Api_url = "https://jsonplaceholder.typicode.com/todos";

export const createTask = async (task: Task): Promise<Task> => {
  return { ...task, id: Math.random() };
};

export const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axios.get(`${Api_url}?_limit=5`);
  return data;
};
