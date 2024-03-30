// TaskItem.js
import React, { useState } from 'react';
import EditTaskModal from '../TaskModal/EditTaskModal'; // Importez le composant TaskModal pour l'édition
import DeleteTaskModal from '../TaskModal/DeleteTaskModal'; // Importez le composant DeleteTaskModal pour la suppression

const TaskItem = ({ task, onDelete }) => {
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
    onDelete();
    setShowDeleteModal(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {editedTask}
      </span>
      <button onClick={handleEdit}>Modifier</button>
      <button onClick={handleDelete}>Supprimer</button>

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
