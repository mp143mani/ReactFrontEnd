import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/api'; // Replace this with your actual backend URL

const userApi = {
  // Fetch all users
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Fetch a single user by ID
  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  },

  // Add a new user
  addUser: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, userData);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  },

  // Update an existing user
  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
  },

  // Delete a user by ID
  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  },
};

export default userApi;
