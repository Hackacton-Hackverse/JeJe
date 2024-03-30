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
      <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={onCancel}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800 text-center">Ajout tâche</h4>
                        <input
                        type="text"
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        className="w-full mt-2 p-2.5  rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        />
                        <div className="mt-2 sm:flex justify-between">
                        <button
                            className="w-full mt-2 p-2.5 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                            onClick={handleSave}
                        >
                            Ajouter
                        </button>
                        <button
                            className="w-full mt-2 p-2.5 text-gray-800 bg-gray-300 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
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

export default AddTaskModal1;
