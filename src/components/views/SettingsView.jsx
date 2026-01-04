// SettingsView.jsx
import React from "react";
import { AiOutlineGlobal, AiOutlineLock } from "react-icons/ai";

const SettingsView = () => {
  const glassCardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "30px",
    marginBottom: "30px",
  };

  const sectionHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  };

  const securityButtonStyle = {
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "180px",
    textAlign: "center",
  };

  return (
    <div
      style={{
        animation: "fadeIn 0.5s ease",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "30px" }}>
        System Settings
      </h1>

      {/* Preferences */}
      <div style={glassCardStyle}>
        <div style={sectionHeaderStyle}>
          <AiOutlineGlobal style={{ fontSize: "1.2rem", color: "#a855f7" }} />
          <h3 style={{ margin: 0 }}>General Preferences</h3>
        </div>

        <SettingToggle
          label="Enable Dark Mode"
          desc="Use system default theme where possible"
          active={true}
        />
        <SettingToggle
          label="Desktop Notifications"
          desc="Get popups when tasks are completed"
          active={true}
        />
        <SettingToggle
          label="Sound Effects"
          desc="Play sounds on user interactions"
          active={false}
        />
      </div>

      {/* Security */}
      <div style={glassCardStyle}>
        <div style={sectionHeaderStyle}>
          <AiOutlineLock style={{ fontSize: "1.2rem", color: "#f59e0b" }} />
          <h3 style={{ margin: 0 }}>Security</h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>
              Two-Factor Authentication
            </p>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.5 }}>
              Currently disabled
            </p>
          </div>
          <button
            style={{
              ...securityButtonStyle,
              background: "rgba(168, 85, 247, 0.1)",
              color: "#a855f7",
              border: "1px solid #a855f7",
            }}
          >
            Enable
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>
              Change Password
            </p>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.5 }}>
              Last changed 3 months ago
            </p>
          </div>
          <button
            style={{
              ...securityButtonStyle,
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Update
          </button>
        </div>
      </div>

      <div style={{ textAlign: "right", marginTop: "-10px" }}>
        <button
          style={{
            color: "#f43f5e",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

// --- SETTINGS HELPER ---
const SettingToggle = ({ label, desc, active }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    }}
  >
    <div>
      <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>{label}</p>
      <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.5 }}>{desc}</p>
    </div>
    <div
      style={{
        width: "50px",
        height: "26px",
        background: active ? "#a855f7" : "rgba(255,255,255,0.1)",
        borderRadius: "15px",
        position: "relative",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          background: "white",
          borderRadius: "50%",
          position: "absolute",
          top: "3px",
          left: active ? "27px" : "3px",
          transition: "0.3s",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      ></div>
    </div>
  </div>
);

export default SettingsView;
