// TaskList.js
import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTaskModal from '../TaskModal/AddTaskModal1' ; // Importez le composant AddTaskModal
import DeleteTaskModal from '../TaskModal/DeleteTaskModal'; // Importez le composant DeleteTaskModal

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false); // État pour afficher ou masquer le modal d'ajout
  const [showDeleteModal, setShowDeleteModal] = useState(false); // État pour afficher ou masquer le modal de suppression
  const [taskToDelete, setTaskToDelete] = useState(null); // Tâche à supprimer

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setShowAddModal(false); // Fermez le modal après avoir ajouté la tâche
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((t) => t !== taskToDelete));
      setShowDeleteModal(false); // Fermez le modal après la suppression
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => {
            setTaskToDelete(task);
            setShowDeleteModal(true);
          }}
        />
      ))}
      <button onClick={() => setShowAddModal(true)}>Ajouter une tâche</button>

      {showAddModal && (
        <AddTaskModal onSave={addTask} onCancel={() => setShowAddModal(false)} />
      )}

      {showDeleteModal && (
        <DeleteTaskModal
          onDelete={deleteTask}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default TaskList;
