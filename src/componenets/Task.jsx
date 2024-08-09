import { useState } from "react";

function Task() {
  const [taskProperties, setTaskProperties] = useState({
    taskTitle: "Sample Task",
    taskDescription: "Sample Task Description",
    taskStatus: "Sample Task Status",
  });

  const updateTaskProperties = (e) => {
    setTaskProperties({ ...taskProperties, [e.target.name]: e.target.value });
  };

  const saveTask = (e) => {
    e.preventDefault();
    console.log(taskProperties);
  };

  return (
    <div className="container mx-auto p-1 rounded-md bg-slate-300 font-mono">
      <h2 className="text-lg text-gray-800 text-center mb-5 mt-5">
        This is Sample Task
      </h2>
      <form className="p-2 max-w-sm mx-auto">
        <div className="mb-5">
          <label className="mb-2 text-sm font-medium" htmlFor="taskTitle">
            Title
          </label>
          <input
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="taskTitle"
            type="text"
            placeholder="Task Title"
            name="taskTitle"
            value={taskProperties.taskTitle}
            onChange={updateTaskProperties}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm font-medium" htmlFor="taskDescription">
            Description
          </label>
          <input
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="taskDescription"
            type="text"
            placeholder="Task Description"
            name="taskDescription"
            value={taskProperties.taskDescription}
            onChange={updateTaskProperties}
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 text-sm font-medium" htmlFor="taskStatus">
            Status
          </label>
          <input
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="taskStatus"
            type="text"
            placeholder="Task Status"
            name="taskStatus"
            value={taskProperties.taskStatus}
            onChange={updateTaskProperties}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={saveTask}
            className="font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Task;
