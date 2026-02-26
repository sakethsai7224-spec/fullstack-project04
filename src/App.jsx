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
import Profile from "./components/profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [section, setSection] = useState("admin");
  const [database, setDatabase] = useState({});

  /* ================================
     BACKGROUND IMAGES (UNCHANGED)
  ================================ */

  const backgrounds = {
    login:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    admin:
      "https://up.yimg.com/ib/th/id/OIP.DW0xdsmGwOEDgDUJvyojVAHaE8?pid=Api&rs=1&c=1&qlt=95&w=155&h=103https://up.yimg.com/ib/th/id/OIP.Uk2Kuzlem00RpDTghkI0sQHaGd?pid=Api&rs=1&c=1&qlt=95&w=111&h=97",
    donor:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    recipient:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    logistics:
      "https://tse2.mm.bing.net/th/id/OIP.XtHtW8whGq0B5SyXTL2nuQHaFW?pid=Api&P=0&h=180https://tse4.mm.bing.net/th/id/OIP.C64UtqzffawFeSaTGGuaYgHaEK?pid=Api&P=0&h=180",
    track:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    timetable:
      "https://tse3.mm.bing.net/th/id/OIP.O6BI76KJdH1mcbmVVl7W-gHaE4?pid=Api&P=0&h=180",
    profile:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    default:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433",
  };

  const currentBackground = !isAuth
    ? backgrounds.login
    : backgrounds[section] || backgrounds.default;

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DARK OVERLAY FOR READABILITY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
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
            {/* TOP BAR */}
            <div className="top-bar">
              <div className="username">
                Welcome, {localStorage.getItem("currentUser")}
              </div>
            </div>

            {/* NAVIGATION */}
            <Navbar
              setSection={setSection}
              setIsAuth={setIsAuth}
            />

            {/* MAIN CONTENT */}
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
    </div>
  );
}

export default App;