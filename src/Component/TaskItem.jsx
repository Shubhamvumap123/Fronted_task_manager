import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { toggleComplete, deleteTask } = useTasks();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`task-item bg-white p-4 rounded-lg shadow-sm mb-3 border-l-4 ${task.completed ? 'border-green-500' : 'border-blue-500'} transition-all duration-200`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 mt-1"
          />
          
          <div>
            <h3 className={`font-medium text-gray-900 ${task.completed ? 'completed-task' : ''}`}>
              {task.title}
            </h3>
            
            {task.description && (
              <p className={`text-sm text-gray-600 mt-1 ${task.completed ? 'completed-task' : ''}`}>
                {task.description}
              </p>
            )}
            
            <p className="text-xs text-gray-500 mt-2">
              Created: {formatDate(task.createdAt)}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;