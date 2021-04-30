import React from 'react';
import { useLocation } from 'react-router';
import './HomePage.css';
import LeftMenu from '../LeftMenu';
import Content from './Content'

function HomePage(){
const location=useLocation();
console.info(location);

return(
    <><LeftMenu />
    <Content/></>
)
}
export default HomePage;