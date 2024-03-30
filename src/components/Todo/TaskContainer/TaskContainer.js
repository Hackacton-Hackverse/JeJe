// TaskContainer.js
import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';

const TaskContainer = () => {
    const [taskLists, setTaskLists] = useState([]);
  
    const addTaskList = () => {
      const newTaskList = {
        idL: Date.now(),
        test:"toto",
      };
      setTaskLists([...taskLists, newTaskList]);
      // setTaskLists([...taskLists, []]);
    };
    const deleteTaskList1 = (idList) => {
      setTaskLists(taskLists.filter((taskList) => taskList.idL !== idList));
    };
    return (
      <div className={`flex flex-wrap justify-center gap-4 p-5 overflow-x-auto ${taskLists.length > 2 ? 'overflow-x-scroll' : ''}`}>
        <button
          className="w-full mt-2 p-2.5 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
          onClick={addTaskList}
        >
          Ajouter une TaskList 
        </button>
        {taskLists.map((taskList, index) => (
          <TaskList key={index} idList={taskList.idL} onDeleteList={deleteTaskList1} />  
        ))}
        
      </div>
    );
};
  

export default TaskContainer;
