import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <div className="login">
          <div className="breakingSmall"></div>
          <div className="login-text">
            <a href= {"/auth/google/"}>login</a>
          </div>
        </div>
  );
}

export default Login;
