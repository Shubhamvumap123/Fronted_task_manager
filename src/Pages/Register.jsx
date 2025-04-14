import React from 'react';
import RegisterForm from '../Component/RegisterForm';
import Navbar from '../Component/Navbar';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;