import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create a new task
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return { success: true, task: response.data };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to create task' 
    };
  }
};

// Get all tasks
export const getTasks = async (params = {}) => {
  try {
    const response = await axios.get(`${API_URL}/tasks`, { params });
    return { success: true, tasks: response.data };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to fetch tasks' 
    };
  }
};

// Get task statistics
export const getTaskStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks/stats`);
    return { success: true, stats: response.data };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to fetch task statistics' 
    };
  }
};

// Get a specific task
export const getTask = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/tasks/${id}`);
    return { success: true, task: response.data };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to fetch task' 
    };
  }
};

// Update a task
export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.patch(`${API_URL}/tasks/${id}`, taskData);
    return { success: true, task: response.data };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to update task' 
    };
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/tasks/${id}`);
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to delete task' 
    };
  }
};