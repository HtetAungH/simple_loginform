import React from "react";

const LoginInput = ({ id, name, type, label, required }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        autoComplete="off"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default LoginInput;
