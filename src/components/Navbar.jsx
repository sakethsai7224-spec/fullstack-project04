function Navbar({ setSection, setIsAuth }) {
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsAuth(false);
  };

  return (
    <div className="navbar">
      <button onClick={() => setSection("admin")}>
        Admin
      </button>

      <button onClick={() => setSection("donor")}>
        Donor
      </button>

      <button onClick={() => setSection("recipient")}>
        Recipient
      </button>

      <button onClick={() => setSection("logistics")}>
        Logistics
      </button>

      <button onClick={() => setSection("track")}>
        Track
      </button>

      <button onClick={() => setSection("timetable")}>
        Timetable
      </button>

      <button onClick={() => setSection("profile")}>
        My Profile
      </button>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;