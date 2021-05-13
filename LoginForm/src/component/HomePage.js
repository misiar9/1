import React from 'react';
import { useLocation } from 'react-router';
import './HomePage.css';
import WelcomePage from '../LeftMenu';
import Content from './Content';

function HomePage(){
const location=useLocation();
console.info(location);

return(
    <><WelcomePage  />
    <Content/></>
)
}
export default HomePage;