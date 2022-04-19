import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import FormLogin from "./FormLogin/FormLogin";
import { pushToast } from "components/Toast";
import "./Login.scss";

const Login = () => {
  const location = useLocation();
  useEffect(() => {
    pushToast("success", location.state?.successful);
  }, [location]);
  return (
    <div className="login-wrapper">
      <h2 className="login-title">Log In</h2>
      <p>Hello and welcome !</p>
      <div className="login-form">
        <FormLogin />
      </div>
      <div className="directional-signup">
        <p>Don’t have an account,</p>
        <Link to="/signup" className="directional-signup-link">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
