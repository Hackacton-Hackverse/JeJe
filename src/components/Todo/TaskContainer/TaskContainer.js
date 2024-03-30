// TaskContainer.js
import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';

const TaskContainer = () => {
  const [taskLists, setTaskLists] = useState([]);

  const addTaskList = () => {
    setTaskLists([...taskLists, []]);
  };

  return (
    <div>
      {taskLists.map((taskList, index) => (
        <TaskList key={index} />
      ))}
      <button onClick={addTaskList}>Ajouter une TaskList</button>
    </div>
  );
};

export default TaskContainer;
