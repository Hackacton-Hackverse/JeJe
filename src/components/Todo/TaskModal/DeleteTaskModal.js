// DeleteTaskModal.js
import React from 'react';

const DeleteTaskModal = ({ onDeleteI, onCancel }) => {
  const handleDelete = () => {
    onDeleteI();
  };

  return (
    <div>
      <p>Voulez-vous vraiment supprimer cette tâche ?</p>
      <button onClick={handleDelete}>Supprimer</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default DeleteTaskModal;
