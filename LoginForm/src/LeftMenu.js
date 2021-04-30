import React from 'react';
import LoginForm from './component/LoginForm';
import App from './App';
import './LeftMenu.css';
import tipico from './component/img/tipico.jpg';
import { routes } from './routes.ts';
import HomePage from './component/HomePage';
import { useHistory } from 'react-router-dom';
import LoginPage from './component/LoginPage';

interface Props{
    user:String,
    logout:()=>void
}

function WelcomePage(props:Props){
    const{
        user,logout
    }=props;
    
    const history = useHistory();
    function Link(){
        history.push(routes.HomePage)
        
        
    }
    return(
        <div className="LeftMenu">
        <h1>Tipico Retail Franchisee Portal</h1>
        <h2>Logged in as: <span className="username">{user}</span></h2>
        <h4>Tipico Kundennr.: 13408</h4>
        <button className="b2" onClick={Link}>Home</button>
        <button className="b2">Eigene Standorte</button>
        <button className="b2">Unterlagen Parter</button>
        <button className="b2">Veranderungsmitteilung</button>
        <button className="b2" onClick={logout}>Logout</button>
    </div>
    );
}
export default WelcomePage;