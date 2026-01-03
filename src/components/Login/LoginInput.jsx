import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginInput = ({
  id,
  name,
  type,
  label,
  icon: Icon,
  isPassword,
  onTogglePassword,
  showPassword,
  required,
  // New props for functionality:
  value,
  onChange,
}) => {
  return (
    <div className="input-field" style={{ position: "relative" }}>
      {/* Optional icon on the left */}
      {Icon && (
        <span
          style={{
            position: "absolute",
            left: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <Icon />
        </span>
      )}

      <input
        type={type}
        name={name}
        id={id}
        required={required}
        autoComplete="off"
        placeholder=" "
        // Connect state here
        value={value}
        onChange={onChange}
        style={{
          paddingRight: isPassword ? "35px" : "5px",
          paddingLeft: Icon ? "35px" : "5px",
        }}
      />

      <label htmlFor={id}>{label}</label>

      {/* Show/Hide Password Toggle */}
      {isPassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          style={{
            position: "absolute",
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "white",
            padding: 0,
            width: "auto",
          }}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
      )}
    </div>
  );
};

export default LoginInput;
