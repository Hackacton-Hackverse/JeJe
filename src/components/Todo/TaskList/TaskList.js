import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTaskModal from '../TaskModal/AddTaskModal1'; // Importez le composant AddTaskModal
import { FaTimes } from 'react-icons/fa'; // Importez l'icône de fermeture
import DeleteTaskModalList from '../TaskModal/DeleteTaskModalList'; // Importez le composant DeleteTaskModal pour la suppression

const TaskList = ({onDeleteList,idList}) => {
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false); // État pour afficher ou masquer le modal d'ajout
  const [showDeleteModalList, setShowDeleteModalList] = useState(false);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks([...tasks, newTask]);
    setShowAddModal(false); // Fermez le modal après avoir ajouté la tâche
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const deleteTaskList = () => {
    // Appelez la fonction onDelete pour supprimer la tâche
    
    onDeleteList(idList);
    setShowDeleteModalList(false);
  }
  const handleDeleteList = () => {
    setShowDeleteModalList(true);
  };

  return (
    <div className="border rounded-md shadow-md p-4 relative w-500">
      <button
        className="absolute top-0 right-0 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
        onClick={handleDeleteList} // Supprimez la première tâche pour cet exemple
      >
        <FaTimes />
      </button>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task.text}
          id={task.id}
          onDelete1={deleteTask}
        />
      ))}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setShowAddModal(true)}
      >
        Ajouter une tâche 
      </button>

      {showAddModal && (
        <AddTaskModal onSave={addTask} onCancel={() => setShowAddModal(false)} />
      )}
      {showDeleteModalList && (
        <DeleteTaskModalList
          onDeleteIList={deleteTaskList}
          onCancelList={() => setShowDeleteModalList(false)}
        />
      )}
    </div>
  );
};

export default TaskList;
