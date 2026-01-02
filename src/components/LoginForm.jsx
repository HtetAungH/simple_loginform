/* ...existing code... */
import React, { useState } from "react";
import LoginInput from "./LoginInput";

const LoginForm = ({ onSwitchToRegister, onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  // 1. State to store user input
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 2. Function to handle typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Function to handle Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Call the onLogin handler passed from App.jsx
    onLogin(formData);
  };

  return (
    <div className="maincontainer">
      {/* Attach handleSubmit to the form tag */}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <LoginInput
          id="mail"
          name="mail"
          type="email"
          label="Enter your email"
          required
          // Pass state and handler
          value={formData.mail}
          onChange={handleChange}
        />

        <LoginInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Enter your password"
          required
          isPassword={true}
          showPassword={showPassword}
          onTogglePassword={togglePasswordVisibility}
          // Pass state and handler
          value={formData.password}
          onChange={handleChange}
        />

        <div className="password-options">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Log In</button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn google">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.52 12.29c0-.85-.08-1.68-.23-2.48H12v4.7h6.45c-.28 1.48-1.11 2.73-2.38 3.58v2.98h3.85c2.25-2.08 3.55-5.14 3.55-8.78z"
                fill="#4285F4"
              />
              <path
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.85-2.98c-1.08.72-2.45 1.15-4.08 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.12C3.25 21.27 7.33 24 12 24z"
                fill="#34A853"
              />
              <path
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.59H1.27C.46 8.18 0 9.99 0 12s.46 3.82 1.27 5.41l4-3.12z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.75c1.76 0 3.34.61 4.58 1.79l3.43-3.44C17.95 1.16 15.24 0 12 0 7.33 0 3.25 2.73 1.27 6.59l4 3.12c.95-2.85 3.6-4.96 6.73-4.96z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>

          <button type="button" className="social-btn github">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>

        <div className="account-options">
          <p>
            Don't have an account?
            <a
              href="#"
              onClick={onSwitchToRegister}
              style={{ marginLeft: "5px", fontWeight: "bold" }}
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
