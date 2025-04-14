import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Load tasks from localStorage based on user ID
      const storedTasks = localStorage.getItem(`tasks_${user.id}`);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        setTasks([]);
      }
    } else {
      setTasks([]);
    }
    setLoading(false);
  }, [user]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`tasks_${user.id}`, JSON.stringify(tasks));
    }
  }, [tasks, user]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        addTask,
        toggleComplete,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);