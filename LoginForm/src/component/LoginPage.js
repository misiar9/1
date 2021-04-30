import React, { useState } from 'react';
import './LoginPage.css';
import LoginForm from './LoginForm';
import WelcomePage from '../LeftMenu'
import tipico from './img/tipico.jpg';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { routes } from '../routes.ts';
import HomePage from './HomePage';

function LoginPage() {
  const adminUser = {
    name: "admin",
    password: "admin"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.name == adminUser.name && details.password == adminUser.password) {
      console.log("Logged in!");
      setUser({ name: details.name });
      setError("");
    }
    else {
      console.log("Incorrect username or password");
      setError("⚠️Incorrect username or password⚠️");
    }

  }
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "" });
  }

  return (
    <div className="App">
      {(user.name != "") ? (
        <WelcomePage user={user.name} logout={Logout} />
      ) : (<LoginForm Login={Login} error={error} />)}
    </div>
  );
}

export default LoginPage;
