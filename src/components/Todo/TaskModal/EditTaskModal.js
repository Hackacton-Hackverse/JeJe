// EditTaskModal.js
import React, { useState } from 'react';

const EditTaskModal = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={onCancel}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800 text-center">Modification tâche</h4>
                        <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className="w-full mt-2 p-2.5 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        />
                        <div className="mt-2 sm:flex justify-between">
                        <button
                            className="w-full mt-2 p-2.5 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={handleSave}
                        >
                            Modifier
                        </button>
                        <button
                            className="w-full mt-2 p-2.5 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={onCancel}
                        >
                            Annuler
                        </button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
