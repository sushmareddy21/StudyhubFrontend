// src/Components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/explore" className="logo-link">
          {/* <img src="/path/to/your/logo.png" alt="StudyHub Logo" className="logo" /> */}
        </Link>
        <Link to="/" className="heading">StudyHub</Link>
        {/* <h1 className="heading">StudyHub</h1> */}
      </div>
      <nav className="nav-links">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/feedback" className="nav-item">Feedback</Link>
        <Link to="/reports" className="nav-item">Reports</Link>
        <Link to="/goals" className="nav-item">Goals</Link>
        <Link to="/surveys" className="nav-item">Surveys</Link>
        <Link to="/study-groups" className="nav-item">Study Groups</Link>
      </nav>
      <div className="nav-links">
        <div className="sub-heading">Sub-sections</div>
        <Link to="/recommendations" className="nav-item">Recommendations</Link>
        <Link to="/customization" className="nav-item">Customization</Link>
        <Link to="/security" className="nav-item">Security</Link>
        <Link to="/tasks" className="nav-item">Tasks</Link>
      </div>
    </div>
  );
};

export default Sidebar;
