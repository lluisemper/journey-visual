import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from 'js-cookie';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props =>
      Cookies.get("cookie") ? (<Component {...props} />) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;