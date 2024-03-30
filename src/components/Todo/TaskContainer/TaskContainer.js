import React, { useState, useEffect } from 'react';
import TaskList from '../TaskList/TaskList';

const TaskContainer = () => {
  const [taskLists, setTaskLists] = useState([]);

  // Chargez les données depuis localStorage lors du chargement initial
  useEffect(() => {
    const savedData = localStorage.getItem('taskLists');
    if (savedData) {
      setTaskLists(JSON.parse(savedData));
    }
  }, []);

  const addTaskList = () => {
    const newTaskList = {
      idL: Date.now(),
      test: "toto",
    };
    setTaskLists([...taskLists, newTaskList]);
  };

  const deleteTaskList1 = (idList) => {
    setTaskLists(taskLists.filter((taskList) => taskList.idL !== idList));
  };

  // Sauvegardez les données dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('taskLists', JSON.stringify(taskLists));
  }, [taskLists]);

  return (
    <div className={`flex flex-wrap justify-center gap-4 p-5 overflow-x-auto `}>
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
