import React, { useState } from 'react';
import EditTaskModal from '../TaskModal/EditTaskModal'; // Importez le composant TaskModal pour l'édition
import DeleteTaskModal from '../TaskModal/DeleteTaskModal'; // Importez le composant DeleteTaskModal pour la suppression
import { FaPen, FaTrash, FaCheck } from 'react-icons/fa'; // Importez les icônes

const TaskItem = ({ task, onDelete1, id }) => {
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const saveEditedTask = (editedText) => {
    setEditedTask(editedText);
    setEditing(false);
  };

  const deleteTask = () => {
    // Appelez la fonction onDelete pour supprimer la tâche
    onDelete1(id);
    setShowDeleteModal(false);
  };

  return (
    <div className="flex items-center justify-between m-2 space-x-2 min-w-300">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        className="text-blue-500"
      />
      <span
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        className="border rounded-md shadow-sm p-2 flex-grow"
      >
        {editedTask}
      </span>
      <div>
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          <FaPen />
        </button>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          <FaTrash />
        </button>
      </div>

      {editing && (
        <EditTaskModal
          task={editedTask}
          onSave={saveEditedTask}
          onCancel={() => setEditing(false)}
        />
      )}

      {showDeleteModal && (
        <DeleteTaskModal
          onDeleteI={deleteTask}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default TaskItem;
