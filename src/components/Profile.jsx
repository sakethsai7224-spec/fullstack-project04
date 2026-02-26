import { useState, useEffect } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    job: "",
    purpose: "",
    rating: "",
    phone: "",
    location: "",
    about: "",
    image: "",
  });

  const [error, setError] = useState("");

  // Load saved profile
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) {
      setProfile(saved);
    } else {
      setProfile((prev) => ({
        ...prev,
        name: localStorage.getItem("currentUser") || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Instant Image Preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    if (!profile.rating) {
      setError("Please select a rating between 1 and 5");
      return;
    }

    setError("");
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      {profile.image && (
        <img
          src={profile.image}
          alt="Profile"
          className="profile-pic"
        />
      )}

      <input
        name="name"
        placeholder="Full Name"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={profile.age}
        onChange={handleChange}
      />

      <input
        name="job"
        placeholder="Job / Occupation"
        value={profile.job}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={profile.location}
        onChange={handleChange}
      />

      <input
        name="purpose"
        placeholder="Purpose of Donation"
        value={profile.purpose}
        onChange={handleChange}
      />

      {/* 🔥 Rating Dropdown (1–5 Only) */}
      <select
        name="rating"
        value={profile.rating}
        onChange={handleChange}
      >
        <option value="">Select Rating (1-5)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      {error && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {error}
        </p>
      )}

      <textarea
        name="about"
        placeholder="About Yourself"
        value={profile.about}
        onChange={handleChange}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}

export default Profile;