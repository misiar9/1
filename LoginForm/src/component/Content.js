import React from 'react';
import { content } from '../content.ts';
import { useLocation } from 'react-router';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Home from './other/Home';
import './Content.css';
import Page2 from './other/page2';
import Page3 from './other/page3';
import Page4 from './other/page4';
function LocationPN(){
switch (location.pathname) {
  case '/homepage':
  <Home/>
   break;
  default:
    <Home/>
  break;
}
}
function Content(){
  const location=useLocation();
console.info(location);




    return(
        <div className="Content">
          <LocationPN/>
}
        </div>
    );
}
export default Content;