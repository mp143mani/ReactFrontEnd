import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadList = () => {
  // State to store leads data
  const [leads, setLeads] = useState([]);

  // Function to fetch leads data from the API
  const fetchLeadsData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/leads');
      setLeads(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch leads data when the component mounts
  useEffect(() => {
    fetchLeadsData();
  }, []);

  return (
    <div>
      <h2>Lead List</h2>
      {/* Display a list of leads */}
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            {lead.name} - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
