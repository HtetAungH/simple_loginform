import React from "react";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <>
      {/* Main container to center the form */}
      <div className="flex items-center justify-center min-h-screen w-full p-4">
        {/* Render the LoginForm component */}
        <LoginForm />
      </div>
    </>
  );
}
