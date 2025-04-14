import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');
  
  if (loading) {
    return <div className="text-center py-4">Loading tasks...</div>;
  }
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all' filter
  });
  
  // Sort tasks by creation date (newest first)
  const sortedTasks = [...filteredTasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-sm rounded-md ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 text-sm rounded-md ${
              filter === 'active'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Active
          </button>
          
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 text-sm rounded-md ${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Completed
          </button>
        </div>
      </div>
      
      {sortedTasks.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          No tasks found. Add some tasks to get started!
        </div>
      ) : (
        <div className="space-y-2">
          {sortedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-500 flex justify-between">
        <span>{tasks.length} total tasks</span>
        <span>{tasks.filter(t => t.completed).length} completed</span>
      </div>
    </div>
  );
};

export default TaskList;