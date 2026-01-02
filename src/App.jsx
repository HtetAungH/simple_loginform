import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
// 1. Import your new Dashboard component
import Dashboard from "./components/Dashboard";

export default function App() {
  const [currentForm, setCurrentForm] = useState("login");

  // 2. New state to store the authenticated user
  // If null = not logged in. If object = logged in.
  const [user, setUser] = useState(null);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  // 3. Handler to simulate logging in
  // You will pass this function down to LoginForm and RegisterForm
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // 4. Handler to logout (resets state)
  const handleLogout = () => {
    setUser(null);
    setCurrentForm("login"); // Reset to login screen on logout
  };

  // 5. If user exists, show Dashboard immediately
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <>
      {currentForm === "login" ? (
        <LoginForm
          onSwitchToRegister={() => toggleForm("register")}
          // 6. Pass the login handler. This is now being used in LoginForm.
          onLogin={handleLogin}
        />
      ) : (
        <RegisterForm
          onSwitchToLogin={() => toggleForm("login")}
          // 6. Pass the login handler
          onLogin={handleLogin}
        />
      )}
    </>
  );
}
