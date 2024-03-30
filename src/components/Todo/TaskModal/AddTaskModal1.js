// AddTaskModal.js
import React, { useState } from 'react';

const AddTaskModal1 = ({ onSave, onCancel }) => {
  const [taskText, setTaskText] = useState('');

  const handleSave = () => {
    onSave(taskText);
    setTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleSave}>Enregistrer</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default AddTaskModal1;
