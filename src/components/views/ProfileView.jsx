// ProfileView.jsx
import React from "react";
import { AiOutlineCamera, AiOutlineSave } from "react-icons/ai";

const ProfileView = ({ user }) => {
  const glassCardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "30px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    background: "rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    color: "white",
    marginTop: "8px",
    fontSize: "0.95rem",
  };

  return (
    <div
      style={{
        animation: "fadeIn 0.5s ease",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "2rem" }}>
        Account Settings
      </h1>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "30px" }}
      >
        <div
          style={{
            ...glassCardStyle,
            textAlign: "center",
            height: "fit-content",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
              margin: "0 auto 20px auto",
            }}
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid rgba(255,255,255,0.1)",
              }}
            />
            <button
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                background: "#a855f7",
                border: "none",
                color: "white",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiOutlineCamera />
            </button>
          </div>
          <h2 style={{ margin: "0 0 5px 0" }}>
            {user?.fullname || "John Doe"}
          </h2>
          <p style={{ opacity: 0.6, margin: 0, fontSize: "0.9rem" }}>
            {user?.mail || "user@example.com"}
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                background: "rgba(16, 185, 129, 0.2)",
                color: "#10b981",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "0.8rem",
              }}
            >
              Active
            </span>
            <span
              style={{
                background: "rgba(168, 85, 247, 0.2)",
                color: "#a855f7",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "0.8rem",
              }}
            >
              Admin
            </span>
          </div>
        </div>

        <div style={glassCardStyle}>
          <h3
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "15px",
              marginBottom: "20px",
            }}
          >
            Personal Information
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Profile Updated!");
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.fullname}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="johndoe123"
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Email Address
              </label>
              <input
                type="email"
                defaultValue={user?.mail}
                disabled
                style={{ ...inputStyle, opacity: 0.5, cursor: "not-allowed" }}
              />
              <p
                style={{ fontSize: "0.75rem", opacity: 0.5, marginTop: "5px" }}
              >
                Email cannot be changed contact admin.
              </p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <label style={{ fontSize: "0.9rem", opacity: 0.8 }}>Bio</label>
              <textarea
                rows="4"
                style={{ ...inputStyle, fontFamily: "inherit" }}
                defaultValue="Full stack developer passionate about React and UI design."
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
              }}
            >
              <button
                type="button"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  background: "#a855f7",
                  border: "none",
                  color: "white",
                  padding: "10px 25px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                }}
              >
                <AiOutlineSave /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
