// Dashboard.jsx
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineCloudUpload,
} from "react-icons/ai";

// Import your separate views
import HomeView from "./HomeView";
import ProfileView from "./ProfileView";
import FilesView from "./FilesView";
import SettingsView from "./SettingsView";

const Dashboard = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState("home");

  // --- GLOBAL CONTAINER STYLE ---
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1000,
    background: "rgba(25, 25, 35, 0.6)",
    backdropFilter: "blur(15px)",
    display: "flex",
    color: "white",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <HomeView user={user} />;
      case "profile":
        return <ProfileView user={user} />;
      case "files":
        return <FilesView />;
      case "settings":
        return <SettingsView />;
      default:
        return <HomeView user={user} />;
    }
  };

  return (
    <div style={containerStyle}>
      {/* --- SIDEBAR --- */}
      <aside
        style={{
          width: "260px",
          background: "rgba(0,0,0, 0.4)",
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            fontSize: "1.8rem",
            fontWeight: "800",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#a855f7" }}>My</span>App
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavItem
            icon={<AiOutlineHome />}
            label="Dashboard"
            isActive={currentView === "home"}
            onClick={() => setCurrentView("home")}
          />
          <NavItem
            icon={<AiOutlineUser />}
            label="My Profile"
            isActive={currentView === "profile"}
            onClick={() => setCurrentView("profile")}
          />
          <NavItem
            icon={<AiOutlineCloudUpload />}
            label="Files"
            isActive={currentView === "files"}
            onClick={() => setCurrentView("files")}
          />
          <NavItem
            icon={<AiOutlineSetting />}
            label="Settings"
            isActive={currentView === "settings"}
            onClick={() => setCurrentView("settings")}
          />
        </nav>

        <div
          style={{
            marginTop: "auto",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
          }}
        >
          <button
            onClick={onLogout}
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #a855f7 0%, #9061f9 100%)",
              border: "none",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(168, 85, 247, 0.4)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <AiOutlineLogout /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main
        style={{
          flex: 1,
          padding: "40px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {renderContent()}
      </main>
    </div>
  );
};

// --- INTERNAL COMPONENT: NAV ITEM ---
const NavItem = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 15px",
      border: "none",
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      color: isActive ? "white" : "rgba(255, 255, 255, 0.6)",
      background: isActive
        ? "linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0) 100%)"
        : "transparent",
      borderLeft: isActive ? "3px solid #a855f7" : "3px solid transparent",
      transition: "0.2s",
      fontFamily: "inherit",
      fontSize: "1rem",
    }}
  >
    <span style={{ fontSize: "1.3rem" }}>{icon}</span>
    <span style={{ fontSize: "0.95rem", fontWeight: isActive ? "600" : "400" }}>
      {label}
    </span>
  </button>
);

export default Dashboard;
