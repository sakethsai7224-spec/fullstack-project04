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

const backgrounds = {
  donor:
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24",

  recipient:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",

  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",

  track:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72",

  timetable:
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",

  profile:
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
};

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [section, setSection] = useState("admin");
  const [database, setDatabase] = useState({});

  const currentBackground = backgrounds[section];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: !isAuth
          ? "linear-gradient(135deg, #1e3c72, #2a5298)" // 🔵 Blue login background
          : currentBackground
          ? `
            linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url(${currentBackground})
          `
          : "#f5f5f5",
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
          {/* Top Bar */}
          <div className="top-bar">
            <div className="username">
              Welcome, {localStorage.getItem("currentUser") || "User"}
            </div>
          </div>

          {/* Navbar */}
          <Navbar
            setSection={setSection}
            setIsAuth={setIsAuth}
          />

          {/* Content Area */}
          <div className="content-area">
            {section === "admin" && <Admin database={database} />}
            {section === "donor" && <Donor setDatabase={setDatabase} />}
            {section === "recipient" && (
              <Recipient setDatabase={setDatabase} />
            )}
            {section === "logistics" && (
              <Logistics
                database={database}
                setDatabase={setDatabase}
              />
            )}
            {section === "track" && <Track database={database} />}
            {section === "timetable" && <Timetable />}
            {section === "profile" && <Profile />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;