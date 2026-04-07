import { useState, useEffect } from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Donor from "./components/Donor";
import Recipient from "./components/Recipient";
import Logistics from "./components/Logistics";
import Track from "./components/Track";
import Timetable from "./components/Timetable";
import Profile from "./components/Profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [section, setSection] = useState("admin");

  const [database, setDatabase] = useState({});

  useEffect(() => {
    // Restore auth state from localStorage
    const savedUser = localStorage.getItem("userEmail");
    if (savedUser) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (isAuth && userEmail) {
      // Load from backend for specific user
      fetch(`/api/database?userEmail=${userEmail}`)
        .then(res => res.json())
        .then(data => setDatabase(data))
        .catch(err => console.error("Error loading database:", err));
    } else if (!isAuth) {
      setDatabase({}); // Clear database on logout
    }
  }, [isAuth]);

  // Provide a sync function instead of tracking entire database in useEffect to avoid loops
  const updateDatabase = async (serialId, record) => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    const recordWithUser = { ...record, userEmail };
    setDatabase(prev => ({ ...prev, [serialId]: recordWithUser }));

    try {
      await fetch("/api/database", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serialId, data: recordWithUser }),
      });
    } catch (err) {
      console.error("Error saving to database:", err);
    }
  };

  const backgrounds = {
    login: "",
    admin:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    donor:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    recipient:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    logistics:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    track:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    timetable:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    profile:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    default:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433",
  };

  const currentBackground = !isAuth
    ? backgrounds.login
    : backgrounds[section] || backgrounds.default;

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 🖼️ FIXED BACKGROUND LAYER */}
      {currentBackground && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
      )}

      {/* 🌑 DARK OVERLAY LAYER */}
      {currentBackground && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: -1,
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
        {!isAuth ? (
          showSignup ? (
            <Signup setShowSignup={setShowSignup} />
          ) : showForgot ? (
            <ForgotPassword setShowForgot={setShowForgot} />
          ) : (
            <Login
              setIsAuth={setIsAuth}
              setShowSignup={setShowSignup}
              setShowForgot={setShowForgot}
            />
          )
        ) : (
          <>
            {/* TOP BAR */}
            <div className="top-bar">
              <div className="username">
                Welcome, {localStorage.getItem("currentUser")}
              </div>
            </div>

            {/* DASHBOARD */}
            <div className="main-layout">
              <Navbar
                setSection={setSection}
                setIsAuth={setIsAuth}
              />

              {/* ✅ SCROLL ONLY HERE */}
              <div
                className="content-area"
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "40px",
                  minHeight: "calc(100vh - 60px)",
                }}
              >
                {section === "admin" && (
                  <Admin database={database} />
                )}

                {section === "donor" && (
                  <Donor updateDatabase={updateDatabase} database={database} />
                )}

                {section === "recipient" && (
                  <Recipient updateDatabase={updateDatabase} database={database} />
                )}

                {section === "logistics" && (
                  <Logistics
                    database={database}
                    updateDatabase={updateDatabase}
                  />
                )}

                {section === "track" && (
                  <Track database={database} />
                )}

                {section === "timetable" && (
                  <Timetable />
                )}

                {section === "profile" && (
                  <Profile />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;