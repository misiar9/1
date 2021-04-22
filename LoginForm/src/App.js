import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
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
        <div className="welcome">
          <img src={tipico} width="500px"></img>
          <h2>Welcome, <span className="username">{user.name}</span></h2>
          <button className="b1">Help</button>
          <button className="b1" onClick={Logout}>Logout</button>
        </div>
      ) : (<LoginForm Login={Login} error={error} />)}
    </div>
  );
}

export default App;
