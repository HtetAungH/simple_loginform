// FilesView.jsx
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineFile,
  AiOutlineFolder,
  AiOutlineAppstore,
  AiOutlineBars,
  AiOutlineDelete,
  AiOutlineCamera,
} from "react-icons/ai";

const FilesView = () => {
  const glassCardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "20px",
  };

  return (
    <div
      style={{
        animation: "fadeIn 0.5s ease",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      {/* Header & Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>My Files</h1>
        <div style={{ position: "relative", width: "300px" }}>
          <AiOutlineSearch
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 0.5,
            }}
          />
          <input
            type="text"
            placeholder="Search files..."
            style={{
              width: "100%",
              padding: "10px 10px 10px 35px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(0,0,0,0.2)",
              color: "white",
            }}
          />
        </div>
      </div>

      {/* Storage Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            ...glassCardStyle,
            background:
              "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)",
            border: "1px solid rgba(168, 85, 247, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontWeight: "bold", color: "#d8b4fe" }}>
              Total Storage
            </span>
            <span style={{ opacity: 0.7 }}>78 GB / 100 GB</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "8px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "78%",
                height: "100%",
                background: "#a855f7",
                borderRadius: "4px",
              }}
            ></div>
          </div>
        </div>

        <div
          style={{
            ...glassCardStyle,
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              padding: "12px",
              background: "rgba(59, 130, 246, 0.1)",
              borderRadius: "10px",
              color: "#3b82f6",
              fontSize: "1.5rem",
            }}
          >
            <AiOutlineFile />
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Documents</h4>
            <span style={{ opacity: 0.6, fontSize: "0.85rem" }}>
              1,240 files
            </span>
          </div>
        </div>
        <div
          style={{
            ...glassCardStyle,
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              padding: "12px",
              background: "rgba(16, 185, 129, 0.1)",
              borderRadius: "10px",
              color: "#10b981",
              fontSize: "1.5rem",
            }}
          >
            <AiOutlineCamera />
          </div>
          <div>
            <h4 style={{ margin: 0 }}>Media</h4>
            <span style={{ opacity: 0.6, fontSize: "0.85rem" }}>
              8,450 files
            </span>
          </div>
        </div>
      </div>

      {/* Folders */}
      <h3 style={{ margin: "10px 0 0 0", opacity: 0.8 }}>Folders</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {["Design Assets", "Marketing", "Personal", "Invoices"].map(
          (folder, i) => (
            <div
              key={i}
              style={{
                ...glassCardStyle,
                cursor: "pointer",
                transition: "0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              <AiOutlineFolder
                style={{
                  fontSize: "2.5rem",
                  color: "#eab308",
                  marginBottom: "10px",
                }}
              />
              <p style={{ margin: 0, fontWeight: "500" }}>{folder}</p>
              <p
                style={{
                  margin: "5px 0 0 0",
                  fontSize: "0.8rem",
                  opacity: 0.5,
                }}
              >
                {12 + i} items
              </p>
            </div>
          )
        )}
      </div>

      {/* Recent Files List */}
      <div style={glassCardStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ margin: 0 }}>Recent Uploads</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <AiOutlineAppstore style={{ cursor: "pointer", opacity: 0.6 }} />
            <AiOutlineBars style={{ cursor: "pointer", color: "#a855f7" }} />
          </div>
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
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
              <th style={{ padding: "10px", opacity: 0.6 }}>Name</th>
              <th style={{ padding: "10px", opacity: 0.6 }}>Size</th>
              <th style={{ padding: "10px", opacity: 0.6 }}>Date</th>
              <th style={{ padding: "10px", opacity: 0.6 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Project_Proposal.pdf",
                size: "2.4 MB",
                date: "Jan 02, 2026",
              },
              {
                name: "Homepage_Design.fig",
                size: "125 MB",
                date: "Jan 01, 2026",
              },
              {
                name: "Meeting_Notes.docx",
                size: "14 KB",
                date: "Dec 29, 2025",
              },
            ].map((file, i) => (
              <tr
                key={i}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <td
                  style={{
                    padding: "15px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <AiOutlineFile style={{ opacity: 0.7 }} /> {file.name}
                </td>
                <td style={{ padding: "15px 10px", opacity: 0.7 }}>
                  {file.size}
                </td>
                <td style={{ padding: "15px 10px", opacity: 0.7 }}>
                  {file.date}
                </td>
                <td style={{ padding: "15px 10px", opacity: 0.7 }}>
                  <AiOutlineDelete
                    style={{
                      cursor: "pointer",
                      opacity: 0.5,
                      color: "#f43f5e",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilesView;
