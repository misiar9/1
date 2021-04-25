import React from 'react';
import LoginForm from './component/LoginForm';
import App from './App';
import './WelcomePage.css';

function WelcomePage(){
    return(
        <div className="welcome">
        <h3>Tipico Retail Franchisee Portal</h3>
        <h2>Welcome, <span className="username">{user.name}</span></h2>
        <button className="b1">Help</button>
        <button className="b1" onClick={Logout}>Logout</button>
        </div>
    );
}
export default WelcomePage;