import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import WelcomePage from './component/WelcomePage'
import tipico from './component/img/tipico.jpg';

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
        <WelcomePage/>
      ) : (<LoginForm Login={Login} error={error} />)}
    </div>
  );
}

export default App;
