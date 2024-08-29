// src/Components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import '../Dashboard.css'; // Import any CSS specific to Dashboard if needed

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        {/* Add the content for your dashboard here */}
      </div>
    </div>
  );
};

export default Dashboard;
