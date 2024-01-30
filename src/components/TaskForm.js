import React, { useState } from "react";
import { v4 as uuId } from "uuid";

const TaskForm = ({ onsubmit }) => {
  const initialObject = {
    id: uuId(),
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
  };
  const [taskObject, setTaskObject] = useState(initialObject);

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskObject({ ...taskObject, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTaskObject(initialObject);
    onsubmit(taskObject);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <label className="ffrmLabel">Title</label>
          <input
            className="formElement"
            required
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={changeValue}
            value={taskObject?.title}
          />
        </div>

        <div>
          <label className="formLabel">Description</label>
          <input
            className="formElement"
            required
            type="text"
            name="description"
            placeholder="Enter Description"
            onChange={changeValue}
            value={taskObject?.description}
          />
        </div>

        <div>
          <label className="formLabel">Priority</label>
          <select
            className="formElement"
            required
            name="priority"
            onChange={changeValue}
            value={taskObject?.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="formLabel">Due Date</label>
          <input
            className="formElement"
            required
            type="date"
            name="dueDate"
            onChange={changeValue}
            value={taskObject?.dueDate}
          />
        </div>
        <div style={{ textAlign: "end", marginTop: "10px" }}>
          <button type="submit" className="addNewTaskButton">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
