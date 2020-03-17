import React, { useState } from 'react';
import './Login.css';
import ApiClient from '../../ApiClient';


const Login = () => {

  const [loginOrg, setLoginOrg] = useState('');

  const handlechange = () => {
    ApiClient.checkOrg(loginOrg);
  }

  return (
    <div className="Login">
      <input type='text' onChange={(e) => setLoginOrg(e.target.value)}></input>
      <button onClick={handlechange}>Login</button>
      <button>Register</button>
    </div>
  );
}

export default Login;
