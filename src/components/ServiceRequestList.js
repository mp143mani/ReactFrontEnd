import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceRequestList = () => {
  // State to store service requests data
  const [serviceRequests, setServiceRequests] = useState([]);

  // Function to fetch service requests data from the API
  const fetchServiceRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/service-requests');
      setServiceRequests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch service requests data when the component mounts
  useEffect(() => {
    fetchServiceRequests();
  }, []);

  return (
    <div>
      <h2>Service Request List</h2>
      <ul>
        {serviceRequests.map((request) => (
          <li key={request._id}>
            {/* Display individual service request data */}
            <h3>{request.title}</h3>
            <p>Status: {request.status}</p>
            <p>Description: {request.description}</p>
            {/* Add more information about the service request */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRequestList;
