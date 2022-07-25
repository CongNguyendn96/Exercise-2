import React from "react";
import "./App.css";
import Header from "./layout/header/index";
import Sidebar from "./layout/sidebar/index";
import Pagination from "./components/pagination/index";
import TaskList from "./components/taskList/index.jsx";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <Header />
      <div className="content" style={{ display: "flex" }}>
        <Sidebar />
        <div className="card-list">
          <TaskList />
          <Form />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
