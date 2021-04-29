import React from 'react';
import './LeftMenu.css';

function LeftMenu(){
    return(
    <div className="LeftMenu">
        <h1>Tipico Retail Franchisee Portal</h1>
        <h2>Logged in as: <span className="username">admin</span></h2>
        <h4>Tipico Kundennr.: 13408</h4>
        <button className="b2">Home</button>
        <button className="b2">Eigene Standorte</button>
        <button className="b2">Unterlagen Parter</button>
        <button className="b2">Veranderungsmitteilung</button>
        <button className="b2">Logout</button>
    </div>
    );
}
export default LeftMenu;