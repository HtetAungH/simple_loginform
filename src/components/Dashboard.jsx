import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineCloudUpload,
  AiOutlineCamera,
  AiOutlineSave,
  AiOutlineBell,
  AiOutlineCheckCircle,
} from "react-icons/ai";

const Dashboard = ({ user, onLogout }) => {
  // State to handle view switching ("home" or "profile")
  const [currentView, setCurrentView] = useState("home");

  // --- GLOBAL STYLES ---
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
          <NavItem icon={<AiOutlineCloudUpload />} label="Files" />
          <NavItem icon={<AiOutlineSetting />} label="Settings" />
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
              // CHANGED: Purple Gradient to match theme
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
              // CHANGED: Purple Shadow
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

      {/* --- MAIN CONTENT SWITCHER --- */}
      <main
        style={{
          flex: 1,
          padding: "40px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {currentView === "home" ? (
          <HomeView user={user} />
        ) : (
          <ProfileView user={user} />
        )}
      </main>
    </div>
  );
};

// ==========================================
// 1. HOME VIEW
// ==========================================
const HomeView = ({ user }) => {
  const glassCardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        animation: "fadeIn 0.5s ease",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.2rem", margin: 0, fontWeight: "600" }}>
            Welcome back, {user?.fullname?.split(" ")[0] || "User"}!
          </h1>
          <p style={{ opacity: 0.6, marginTop: "5px" }}>
            Here is what's happening with your account today.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>{user?.fullname}</p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#a855f7" }}>
              Premium Member
            </p>
          </div>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "url('https://i.pravatar.cc/150?img=12')",
              backgroundSize: "cover",
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          ></div>
        </div>
      </header>

      {/* Stats Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        <StatCard
          title="Total Views"
          value="24.5k"
          trend="+12%"
          color="#a855f7"
        />
        <StatCard
          title="Active Projects"
          value="7"
          trend="+2"
          color="#3b82f6"
        />
        <StatCard title="New Messages" value="12" trend="New" color="#10b981" />
        <StatCard title="Storage Used" value="78%" trend="GB" color="#f59e0b" />
      </div>

      {/* Middle Section: Chart & Quick Actions */}
      <div
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}
      >
        <div style={glassCardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ margin: 0 }}>Weekly Activity</h3>
            <select
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                opacity: 0.7,
              }}
            >
              <option>Last 7 Days</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              height: "150px",
              paddingBottom: "10px",
            }}
          >
            <Bar height="40%" day="Mon" />
            <Bar height="70%" day="Tue" active />
            <Bar height="50%" day="Wed" />
            <Bar height="30%" day="Thu" />
            <Bar height="85%" day="Fri" />
            <Bar height="60%" day="Sat" />
            <Bar height="45%" day="Sun" />
          </div>
        </div>

        <div style={glassCardStyle}>
          <h3 style={{ margin: "0 0 20px 0" }}>Quick Actions</h3>
          <button
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "10px",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            + Upload New File
          </button>
          <button
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            View Analytics Report
          </button>
        </div>
      </div>

      {/* Projects & Notifications */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          paddingBottom: "20px",
        }}
      >
        <div style={glassCardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ margin: 0 }}>Recent Projects</h3>
            <button
              style={{
                background: "transparent",
                color: "#a855f7",
                border: "none",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              View All
            </button>
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.9rem",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "left",
                }}
              >
                <th
                  style={{
                    padding: "10px 0",
                    opacity: 0.6,
                    fontWeight: "normal",
                  }}
                >
                  Project Name
                </th>
                <th
                  style={{
                    padding: "10px 0",
                    opacity: 0.6,
                    fontWeight: "normal",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "10px 0",
                    opacity: 0.6,
                    fontWeight: "normal",
                  }}
                >
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <ProjectRow
                name="Website Redesign"
                status="In Progress"
                date="Dec 24, 2025"
                color="#3b82f6"
              />
              <ProjectRow
                name="Mobile App Logic"
                status="Completed"
                date="Nov 10, 2025"
                color="#10b981"
              />
              <ProjectRow
                name="Dashboard UI"
                status="Pending"
                date="Jan 05, 2026"
                color="#f59e0b"
              />
            </tbody>
          </table>
        </div>

        <div style={glassCardStyle}>
          <h3 style={{ margin: "0 0 20px 0" }}>Notifications</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <NotificationItem
              icon={<AiOutlineUser />}
              text="New user registered"
              time="2 min ago"
              color="#a855f7"
            />
            <NotificationItem
              icon={<AiOutlineCloudUpload />}
              text="File upload complete"
              time="1 hour ago"
              color="#3b82f6"
            />
            <NotificationItem
              icon={<AiOutlineBell />}
              text="System update pending"
              time="5 hours ago"
              color="#f59e0b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. PROFILE VIEW
// ==========================================
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

// --- HELPER COMPONENTS ---

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

const StatCard = ({ title, value, trend, color }) => (
  <div
    style={{
      background: "rgba(255, 255, 255, 0.05)",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
    }}
  >
    <h4
      style={{
        margin: "0 0 5px 0",
        fontSize: "0.85rem",
        opacity: 0.6,
        fontWeight: "normal",
      }}
    >
      {title}
    </h4>
    <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
      <h2 style={{ margin: 0, fontSize: "1.8rem" }}>{value}</h2>
      <span
        style={{
          fontSize: "0.8rem",
          color: color,
          marginBottom: "5px",
          background: "rgba(255,255,255,0.1)",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        {trend}
      </span>
    </div>
  </div>
);

const Bar = ({ height, day, active }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      height: "100%",
    }}
  >
    <div
      style={{
        width: "12px",
        height: "100%",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "10px",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          height: height,
          background: active ? "#a855f7" : "white",
          borderRadius: "10px",
          boxShadow: active ? "0 0 10px #a855f7" : "none",
        }}
      ></div>
    </div>
    <span style={{ fontSize: "0.7rem", opacity: 0.6 }}>{day}</span>
  </div>
);

const ProjectRow = ({ name, status, date, color }) => (
  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <td style={{ padding: "12px 0", fontWeight: "500" }}>{name}</td>
    <td style={{ padding: "12px 0" }}>
      <span
        style={{
          background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
            color.slice(3, 5),
            16
          )}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`,
          color: color,
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "0.8rem",
        }}
      >
        {status}
      </span>
    </td>
    <td style={{ padding: "12px 0", opacity: 0.7, fontSize: "0.85rem" }}>
      {date}
    </td>
  </tr>
);

const NotificationItem = ({ icon, text, time, color }) => (
  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        padding: "10px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color,
      }}
    >
      {icon}
    </div>
    <div>
      <p style={{ margin: "0 0 2px 0", fontSize: "0.9rem" }}>{text}</p>
      <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>{time}</span>
    </div>
  </div>
);

export default Dashboard;
