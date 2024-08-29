import React from "react";
import { useNavigate } from "react-router-dom";
import Welcomepage from "../Assets/Welcome page1.jpg";
import "../App.css"; // Import your CSS file

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleExploreClick = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={Welcomepage} alt="Welcome page" className="welcome-image" />
        <button className="explore-button" onClick={handleExploreClick}>
          Explore
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
