import React from "react";
import TaskItem from "./TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";

const TaskList = ({ taskList, taskChange }) => {
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    let updatedTaskList = { ...taskList };
    if (destination.droppableId !== source.droppableId) {
      const sourceTaskList = taskList[source.droppableId];
      const destTaskList = taskList[destination.droppableId];
      const [draggableObject] = sourceTaskList.splice(source.index, 1);
      destTaskList.splice(destination.index, 0, draggableObject);
      updatedTaskList[source.droppableId] = sourceTaskList;
      updatedTaskList[destination.droppableId] = destTaskList;
    } else {
      let copiedItems = [...taskList[source.droppableId]];
      const [draggableObject] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, draggableObject);
      updatedTaskList[source.droppableId] = copiedItems;
    }
    taskChange(updatedTaskList);
    localStorage.setItem("allTaskList", JSON.stringify(updatedTaskList));
  };

  const taskListAdded = taskList.added;
  const taskListPending = taskList.pending;
  const taskListCompleted = taskList.completed;

  return (
    <div className="dragContainer">
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <div className="colDivide">
            <h4 className="heading" style={{ textAlign: "center" }}>
              Added
            </h4>

            <Droppable droppableId="added">
              {(provided) => (
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0px",
                    margin: "0px",
                    height: "100%",
                  }}
                  className="taskListMinHeight"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {taskListAdded.length > 0 ? (
                    taskListAdded.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            style={{ background: "white" }}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskItem key={index} taskObject={task} />
                          </li>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div
                      style={{
                        marginTop: "20px",
                        height: "100%",
                        textAlign: "center",
                      }}
                    >
                      No Added Task
                    </div>
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </div>

        <div>
          <div className="colDivide">
            <h4 className="heading" style={{ textAlign: "center" }}>
              Pending
            </h4>

            <Droppable droppableId="pending">
              {(provided) => (
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0px",
                    height: "100%",
                    margin: "0px",
                  }}
                  className="taskListMinHeight"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {taskListPending.length > 0 ? (
                    taskListPending.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            style={{ background: "white" }}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskItem key={index} taskObject={task} />
                          </li>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div
                      style={{
                        marginTop: "20px",
                        height: "100%",
                        textAlign: "center",
                      }}
                    >
                      No Pending Task
                    </div>
                  )}

                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </div>

        <div>
          <div className="colDivide">
            <h4 className="heading" style={{ textAlign: "center" }}>
              Completed
            </h4>

            <Droppable droppableId="completed">
              {(provided) => (
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0px",
                    height: "100%",
                    margin: "0px",
                  }}
                  className="taskListMinHeight"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {taskListCompleted.length > 0 ? (
                    taskListCompleted.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            style={{ background: "white" }}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskItem key={index} taskObject={task} />
                          </li>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div
                      style={{
                        marginTop: "20px",
                        height: "100%",
                        textAlign: "center",
                      }}
                    >
                      No Completed Task
                    </div>
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
