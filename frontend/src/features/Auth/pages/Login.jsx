import React from "react";
import "../style/Form.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="email">
            Email
            <input type="text" id="email" placeholder="Enter your email" />
          </label>
          <label htmlFor="password">
            Password
            <input id="password" type="text" placeholder="Enter your password" />
          </label>

          <button>Login</button>
        </form>

        <p>Create an account ? <Link to={'/register'} className="link">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
