import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../Component/Navbar';
import AddTask from '../Component/AddTask';
import TaskList from '../Component/TaskList';

const TaskDashboard = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;