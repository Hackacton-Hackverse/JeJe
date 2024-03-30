// EditTaskModal.js
import React, { useState } from 'react';

const EditTaskModal = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div>
      <input
        type="text"
        value={editedTask}
        onChange={(e) => setEditedTask(e.target.value)}
      />
      <button onClick={handleSave}>Enregistrer</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default EditTaskModal;
