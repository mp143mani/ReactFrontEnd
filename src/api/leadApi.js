import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/api'; // Replace this with your actual backend URL

const leadApi = {
  // Fetch all leads
  getAllLeads: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/leads`);
      return response.data;
    } catch (error) {
      console.error('Error fetching leads:', error);
      throw error;
    }
  },

  // Fetch a single lead by ID
  getLeadById: async (leadId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/leads/${leadId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching lead with ID ${leadId}:`, error);
      throw error;
    }
  },

  // Add a new lead
  addLead: async (leadData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/leads`, leadData);
      return response.data;
    } catch (error) {
      console.error('Error adding lead:', error);
      throw error;
    }
  },

  // Update an existing lead
  updateLead: async (leadId, leadData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/leads/${leadId}`, leadData);
      return response.data;
    } catch (error) {
      console.error(`Error updating lead with ID ${leadId}:`, error);
      throw error;
    }
  },

  // Delete a lead by ID
  deleteLead: async (leadId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/leads/${leadId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting lead with ID ${leadId}:`, error);
      throw error;
    }
  },
};

export default leadApi;
