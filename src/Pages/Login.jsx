import React from 'react';
import LoginForm from '../Component/LoginForm';
import Navbar from '../Component/Navbar';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;