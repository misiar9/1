import React, { useState } from 'react';
import './LoginForm.css';
import tipico from './img/tipico.jpg';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h3>Tipico Retail Franchisee Portal</h3>
                <img src={tipico} width="500px"></img>
                {(error !="") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" id="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;
