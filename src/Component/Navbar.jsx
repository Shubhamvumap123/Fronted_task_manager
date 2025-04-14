import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const { isAuthenticated, currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-primary-600">
                                Task Manager
                            </Link>
                        </div>
                        {/* Desktop menu */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {isAuthenticated ? (
                                <>
                                    <Link 
                                        to="/" 
                                        className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link 
                                        to="/tasks" 
                                        className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Tasks
                                    </Link>
                                    <Link 
                                        to="/tasks/add" 
                                        className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Add Task
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link 
                                        to="/login" 
                                        className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        className="border-transparent text-gray-500 hover:border-primary-500 hover:text-primary-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    
                    {/* User info and logout */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {isAuthenticated && (
                            <>
                                <span className="text-gray-700 text-sm font-medium">
                                    Welcome, {currentUser?.name || 'User'}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="ml-4 px-3 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        {isAuthenticated ? (
                            <>
                                <Link 
                                    to="/" 
                                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-primary-500 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/tasks" 
                                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-primary-500 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Tasks
                                </Link>
                                <Link 
                                    to="/tasks/add" 
                                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-primary-500 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Add Task
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-red-600 hover:border-red-500 hover:bg-gray-50 hover:text-red-700"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login" 
                                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-primary-500 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/register" 
                                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-primary-500 hover:bg-gray-50 hover:text-primary-700"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;