import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import WelcomePage from './LeftMenu'
import tipico from './component/img/tipico.jpg';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import {routes} from './routes'

function App() {
  const adminUser = {
    name: "admin",
    password: "admin"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.name == adminUser.name && details.password == adminUser.password)
     { 
       console.log("Logged in!");
       setUser({name: details.name});
     }
    else
    {
      console.log("Incorrect username or password");
      setError("⚠️Incorrect username or password⚠️");
    }

  }
  const Logout = () => {
    console.log("Logout");
    setUser({name:""});
  }

  return (
    <div className="App">
      <Switch>
      {(user.name != "") ? (
        <Route path={routes.WelcomePage} render={()=><WelcomePage user={user.name} logout={Logout} />} />
      ) : (<LoginForm Login={Login} error={error} />)}
    </Switch>
    </div>
  );
}

export default App;
