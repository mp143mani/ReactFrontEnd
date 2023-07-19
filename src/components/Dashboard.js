// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   // State to store dashboard data
//   const [dashboardData, setDashboardData] = useState({});

//   // Function to fetch dashboard data from the API
//   const fetchDashboardData = async () => {
//     try {
//       const response = await axios.get('http://localhost:9000/api/dashboard');
//       setDashboardData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch dashboard data when the component mounts
//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to the Dashboard</h2>
//       {/* Display data, charts, etc. */}
//       <div>
//         <h3>Service Requests: {dashboardData.serviceRequestsCount || 0}</h3>
//         <h3>Leads: {dashboardData.leadsCount || 0}</h3>
//         <h3>Contacts: {dashboardData.contactsCount || 0}</h3>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/someendpoint');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      {/* Add any other dashboard content here */}
      <button onClick={fetchData}>Fetch Data</button>
      {data && <p>{data.message}</p>}
    </div>
  );
};

export default Dashboard;
