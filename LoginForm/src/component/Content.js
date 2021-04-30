import React from 'react';
import { content } from '../content.ts';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Home from './other/Home';
import './Content.css';

function Content(){
    return(
        <div className="Content">
        <Switch>
        <Route path={content.HomePage} render={() => <Home/>} />
        <Route path={content.Page2} render={()=> <Page2 />} />
        <Redirect to={content.HomePage} />
      </Switch>
        </div>
    );
}
export default withRouter(Content);