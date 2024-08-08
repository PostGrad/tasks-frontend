import { useState } from "react";

function Task() {
  const [taskProperties, setTaskProperties] = useState({
    taskTitle: "Sample Task",
    taskDescription: "Sample Task Description",
    taskStatus: "Sample Task Status",
  });

  const updateTaskProperties = (e) => {
    setTaskProperties({ ...taskProperties, [e.target.name]: e.target.value });

    console.log(taskProperties);
  };

  return (
    <div>
      This is Sample Task
      <form>
        <label htmlFor="taskTitle">Task Title: </label>
        <input
          id="taskTitle"
          type="text"
          placeholder="Task Title"
          name="taskTitle"
          value={taskProperties.taskTitle}
          onChange={updateTaskProperties}
        />
        <label htmlFor="taskDescription">Task Description: </label>
        <input
          id="taskDescription"
          type="text"
          placeholder="Task Description"
          name="taskDescription"
          value={taskProperties.taskDescription}
          onChange={updateTaskProperties}
        />
        <label htmlFor="taskStatus">Task Status: </label>
        <input
          id="taskStatus"
          type="text"
          placeholder="Task Status"
          name="taskStatus"
          value={taskProperties.taskStatus}
          onChange={updateTaskProperties}
        />
      </form>
    </div>
  );
}

export default Task;
