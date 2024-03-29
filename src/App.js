import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const initialObject = {
    added: [],
    pending: [],
    completed: [],
  };
  const [taskList, setTaskList] = useState(initialObject);

  useEffect(() => {
    const allTask = localStorage.getItem("allTaskList");
    setTaskList(allTask ? JSON.parse(allTask) : initialObject);
  }, []);

  const onsubmit = (object) => {
    setTaskList({ ...taskList, added: [...taskList.added, object] });
  };

  const taskChange = (object) => {
    setTaskList(object);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>Task Management App</h2>
      <div>
        <h5 className="heading">Task Form</h5>
        <div className="formContainer">
          <TaskForm onsubmit={onsubmit} />
        </div>
      </div>

      <div>
        <h5 className="heading">Task List</h5>
        <TaskList taskList={taskList} taskChange={taskChange} />
      </div>
    </div>
  );
}

export default App;
