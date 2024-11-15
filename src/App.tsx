import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import FilteredTaskList from "./components/FilteredTaskList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask />
        <FilteredTaskList />
      </div>
    </Provider>
  );
}

export default App;
