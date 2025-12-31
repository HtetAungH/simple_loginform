import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  // 'login' or 'register'
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === "login" ? (
        // Pass a function to switch to register
        <LoginForm onSwitchToRegister={() => toggleForm("register")} />
      ) : (
        // Pass a function to switch to login
        <RegisterForm onSwitchToLogin={() => toggleForm("login")} />
      )}
    </>
  );
}
