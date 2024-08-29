// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard'; // Import your Dashboard component
import Feedback from './Components/Feedback'; // Import other components
import Reports from './Components/Reports';
import Goals from './Components/Goals';
import Surveys from './Components/Surveys';
import StudyGroups from './Components/StudyGroups';
import Recommendations from './Components/Recommendations'; // Import Recommendations component
import Customization from './Components/Customization'; // Import Customization component
import Security from './Components/Security'; // Import Security component
import Tasks from './Components/Tasks'; // Import Tasks component
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/study-groups" element={<StudyGroups />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/security" element={<Security />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/explore" element={<Navbar />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
