/* ...existing code... */
import React from "react";
import LoginInput from "./LoginInput";

const LoginForm = () => {
  return (
    <div className="maincontainer">
      <form action="#" className="">
        <h2>Login</h2>
        <LoginInput
          id="mail"
          name="mail"
          type="text"
          label="Enter your E-mail"
          required
        />

        <LoginInput
          id="password"
          name="password"
          type="password"
          label="Enter your Password"
          required
        />
        <div className="password-options">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Log In</button>
        <div className="account-options">
          <p>
            Don't have an account?
            <a href="#" style={{ marginLeft: 8, fontWeight: 600 }}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
