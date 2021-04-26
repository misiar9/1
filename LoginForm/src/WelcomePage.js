import React from 'react';
import LoginForm from './component/LoginForm';
import App from './App';
import './WelcomePage.css';

interface Props{
    user:String,
    logout:()=>void
}

function WelcomePage(props:Props){
    const{
        user,logout
    }=props;
    return(
        <div className="welcome">
        <h3>Tipico Retail Franchisee Portal</h3>
        <h2>Welcome, <span className="username">{user}</span></h2>
        <button className="b1">Help</button>
        <button className="b1" onClick={logout}>Logout</button>
        </div>
    );
}
export default WelcomePage;