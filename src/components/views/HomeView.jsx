// HomeView.jsx
import React from "react";
import {
  AiOutlineUser,
  AiOutlineCloudUpload,
  AiOutlineBell,
} from "react-icons/ai";

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

      {/* Middle Section */}
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

// --- HOME HELPERS ---
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

export default HomeView;
