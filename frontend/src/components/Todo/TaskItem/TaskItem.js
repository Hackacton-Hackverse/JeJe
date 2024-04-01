import React, { useState } from 'react';
import EditTaskModal from '../TaskModal/EditTaskModal'; // Importez le composant TaskModal pour l'édition
import DeleteTaskModal from '../TaskModal/DeleteTaskModal'; // Importez le composant DeleteTaskModal pour la suppression
import { FaPen, FaTrash, FaCheck } from 'react-icons/fa'; // Importez les icônes
import "./checkbox.css"
import bin_icon from '../../../assets/images/bin_icon.svg';
import edit from '../../../assets/images/edit.png';

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
    <div className="flex items-center justify-between m-2 space-x-2 min-w-300 border rounded-md shadow-sm p-2 flex-grow bg-blue-200" style={{background: completed ? '#c8ffbc' : 'white' }}>
      
      <div className="checkbox-wrapper-46">
        <input
          type="checkbox"
          id="cbx-46"
          class="inp-cbx"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <label for="cbx-46" class="cbx">
          <span>
            <svg viewBox="0 0 12 10" height="25px" width="25px">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
        </label>
      </div>
      <span
        style={{ textDecoration: completed ? 'line-through' : 'none',background: completed ? '#c8ffbc' : 'white' }}
        className=""
      >
        {editedTask}
      </span>
      <div>
        <button
          onClick={handleEdit}
          className="icon-btn-edit-home"
        >
          <img src={edit} className="edit-icon" alt="" />
        </button>
        <button
          onClick={handleDelete}
          className="icon-btn-delete-home"
        >
          <img src={bin_icon} className="delete-icon" alt="" />
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
