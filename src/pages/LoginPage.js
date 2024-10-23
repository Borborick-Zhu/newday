// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../images/logo.png';

function LoginPage() {
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent page refresh on form submit
        // Perform login logic here (e.g., validation or authentication)

        // Navigate to the dashboard after successful login
        navigate('/dashboard');
    };
    return (
        <div className="login-container">
        <div className="login-box">
            <img 
            src={logo}
            alt="logo"
            className="logo"
            />
            <h1>Newday</h1>
            <form onSubmit={handleLogin}>
            <input type="email" placeholder="   email" className="input-field" />
            <input type="password" placeholder="   password" className="input-field" />
            <button type="submit" className="login-button">LOGIN</button>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;
