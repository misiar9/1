import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import WelcomePage from './WelcomePage'
import tipico from './component/img/tipico.jpg';
import LeftMenu from './component/LeftMenu';

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
      console.log("Incorrect username or password")
    }

  }
  const Logout = () => {
    console.log("Logout");
    setUser({name:""});
  }

  return (
    <div className="App">
      {(user.name != "") ? (
        <LeftMenu/>,
        <WelcomePage user={user.name} logout={Logout} />
      ) : (<LoginForm Login={Login} error={error} />)}
    </div>
  );
}

export default App;
