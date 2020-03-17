import React, { useState } from 'react';
import './Login.css';
import ApiClient from '../../ApiClient';


const Login = () => {

  const [initialState, setInitialState] = useState({
    organization: '',
    username: '',
    password: ''
  });

  const handlechange = () => {
    ApiClient.checkOrg(initialState);
  }

  return (
    <div className="Login">
      <input type='text' onChange={(e) => setInitialState({...initialState, organization: e.target.value})}></input>
      <input type='text' onChange={(e) => setInitialState({...initialState, username: e.target.value})}></input>
      <input type='text' onChange={(e) => setInitialState({...initialState, password: e.target.value})}></input>
      <button onClick={handlechange}>Login</button>
      <button>Register</button>
    </div>
  );
}

export default Login;
