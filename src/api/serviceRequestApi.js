import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000/api'; // Replace this with your actual backend URL

const serviceRequestApi = {
  // Fetch all service requests
  getAllServiceRequests: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/service-requests`);
      return response.data;
    } catch (error) {
      console.error('Error fetching service requests:', error);
      throw error;
    }
  },

  // Fetch a single service request by ID
  getServiceRequestById: async (serviceRequestId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/service-requests/${serviceRequestId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching service request with ID ${serviceRequestId}:`, error);
      throw error;
    }
  },

  // Add a new service request
  addServiceRequest: async (serviceRequestData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/service-requests`, serviceRequestData);
      return response.data;
    } catch (error) {
      console.error('Error adding service request:', error);
      throw error;
    }
  },

  // Update an existing service request
  updateServiceRequest: async (serviceRequestId, serviceRequestData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/service-requests/${serviceRequestId}`, serviceRequestData);
      return response.data;
    } catch (error) {
      console.error(`Error updating service request with ID ${serviceRequestId}:`, error);
      throw error;
    }
  },

  // Delete a service request by ID
  deleteServiceRequest: async (serviceRequestId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/service-requests/${serviceRequestId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting service request with ID ${serviceRequestId}:`, error);
      throw error;
    }
  },
};

export default serviceRequestApi;
