import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <div className="login">
          <div className="breakingSmall"></div>
          <div className="login-text">
            <a href= {"http://localhost:4000/auth/google/"}>login</a>
          </div>
        </div>
  );
}

export default Login;
