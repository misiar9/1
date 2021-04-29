import React from 'react';
import LoginForm from './component/LoginForm';
import App from './App';
import LeftMenu from './component/LeftMenu';
import './WelcomePage.css';
import tipico from './component/img/tipico.jpg';

interface Props{
    user:String,
    logout:()=>void
}

function WelcomePage(props:Props){
    const{
        user,logout
    }=props;
    return(
        <LeftMenu user={props.user}/>
        
    );
}
export default WelcomePage;