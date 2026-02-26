import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
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
  const [section, setSection] = useState("admin");
  const [database, setDatabase] = useState({});

  // 🔥 Backgrounds for each section
  const backgrounds = {
    login:
      "https://images.unsplash.com/photo-1606788075761-0c23b0a7f9c0",
    admin:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    donor:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    recipient:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    logistics:
      "https://images.unsplash.com/photo-1581091215367-59ab6f5d4a8f",
    track:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    timetable:
      "https://images.unsplash.com/photo-1521790360285-8a04f8e5c4c7",
    profile:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    default:
      "https://images.unsplash.com/photo-1606788075761-0c23b0a7f9c0",
  };

  const currentBackground = !isAuth
    ? backgrounds.login
    : backgrounds[section] || backgrounds.default;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!isAuth ? (
        showSignup ? (
          <Signup setShowSignup={setShowSignup} />
        ) : (
          <Login
            setIsAuth={setIsAuth}
            setShowSignup={setShowSignup}
          />
        )
      ) : (
        <div>
          {/* 🔥 TOP BAR */}
          <div className="top-bar">
            <div className="username">
              Welcome, {localStorage.getItem("currentUser")}
            </div>
          </div>

          {/* 🔥 NAVBAR */}
          <Navbar
            setSection={setSection}
            setIsAuth={setIsAuth}
          />

          {/* 🔥 CONTENT AREA */}
          <div className="content-area">
            {section === "admin" && (
              <Admin database={database} />
            )}

            {section === "donor" && (
              <Donor setDatabase={setDatabase} />
            )}

            {section === "recipient" && (
              <Recipient setDatabase={setDatabase} />
            )}

            {section === "logistics" && (
              <Logistics
                database={database}
                setDatabase={setDatabase}
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
      )}
    </div>
  );
}

export default App;