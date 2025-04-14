import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl sm:tracking-tight lg:text-7xl">
            Organize Your Tasks with Ease
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 sm:text-xl">
            A simple and intuitive task manager to help you stay on top of your daily activities and boost your productivity.
          </p>
          
          <div className="mt-10">
            {user ? (
              <Link 
                to="/tasks" 
                className="px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Go to Your Tasks
              </Link>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-8 py-3 border border-transparent text-lg font-medium rounded-md text-gray-700 bg-gray-100 shadow-lg hover:bg-gray-200 transition duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Tasks</h2>
              <p className="text-gray-600">
                Quickly add new tasks with titles and descriptions to keep track of your to-dos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stay Organized</h2>
              <p className="text-gray-600">
                Filter your tasks by status and mark them as complete when you're done.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Track Progress</h2>
              <p className="text-gray-600">
                See your completed tasks and keep a history of all your accomplishments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
