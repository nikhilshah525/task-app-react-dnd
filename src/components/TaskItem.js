import React from "react";

const TaskItem = ({ taskObject }) => {
  return (
    <div className="taskItem">
      <span className="taskTitle"> {taskObject.title}</span>
      <div>
        <p className="taskDesc"> {taskObject.description}</p>
        <div style={{textAlign:"end"}}>
          {taskObject.priority === "low" && (
            <span className="lowPriority text-secondary p-1 rounded">Low</span>
          )}
          {taskObject.priority === "medium" && (
            <span className="mediumPriority text-secondary p-1 rounded">
              Medium
            </span>
          )}
          {taskObject.priority === "high" && (
            <span className="highPriority text-secondary p-1 rounded">
              High
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
