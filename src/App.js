import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PolicyFiles from './pages/PolicyFiles';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set LoginPage as the default route */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/policy" element={<PolicyFiles />} />
      </Routes>
    </Router>
  );
}

export default App;
