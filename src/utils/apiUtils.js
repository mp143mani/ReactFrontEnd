const axios = require('axios');

const API_BASE_URL = 'http://localhost:9000/api'; // Replace this with your actual backend URL

const callApi = async (method, path, data = null) => {
  try {
    const response = await axios[method](`${API_BASE_URL}${path}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`API Error: ${error.message}`);
  }
};

module.exports = {
  callApi,
};
