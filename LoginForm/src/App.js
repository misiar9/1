import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import WelcomePage from './LeftMenu'
import tipico from './component/img/tipico.jpg';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { routes } from './routes.ts';
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={routes.LoginPage} render={() => <LoginPage />} />
        <Route path={routes.HomePage} render={()=> <HomePage />} />
        <Redirect to={routes.LoginPage} />
      </Switch>
    </div>
  )
}

export default withRouter(App);
