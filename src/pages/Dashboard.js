// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaFolder, FaUserCircle, FaEllipsisV } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();

  const handlePolicyClick = (policyName) => {
    navigate(`/policy`);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo} alt="Newday Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#" className="nav-item active">All Policies</a></li>
            <li><a href="#" className="nav-item">My Policies</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <input type="text" className="search-bar" placeholder="Search..." />
          <FaUserCircle className="user-icon" />
        </header>

        <section className="policy-list">
          <div className="policy-item" onClick={() => handlePolicyClick("Food Policy")}>
            <FaFolder className="folder-icon" />
            <span>Food Policy</span>
            <FaEllipsisV className="options-icon" />
          </div>

          <div className="policy-item" onClick={() => handlePolicyClick("Medicine Policy")}>
            <FaFolder className="folder-icon" />
            <span>Medicine Policy</span>
            <FaEllipsisV className="options-icon" />
          </div>

          <div className="policy-item" onClick={() => handlePolicyClick("Cleaning Policy")}>
            <FaFolder className="folder-icon" />
            <span>Cleaning Policy</span>
            <FaEllipsisV className="options-icon" />
          </div>
        </section>

        <button className="upload-button">+ upload policy</button>
      </main>
    </div>
  );
}

export default Dashboard;
