import { useState, useEffect } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [purpose, setPurpose] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);

  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    const savedProfile = JSON.parse(
      localStorage.getItem(`profile_${currentUser}`)
    );

    if (savedProfile) {
      setName(savedProfile.name || "");
      setAge(savedProfile.age || "");
      setJob(savedProfile.job || "");
      setPurpose(savedProfile.purpose || "");
      setRating(savedProfile.rating || "");
      setImage(savedProfile.image || null);
    }
  }, [currentUser]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const profileData = {
      name,
      age,
      job,
      purpose,
      rating,
      image,
    };

    localStorage.setItem(
      `profile_${currentUser}`,
      JSON.stringify(profileData)
    );

    alert("Profile Saved Successfully");
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      {image && (
        <img
          src={image}
          alt="Profile"
          className="profile-pic"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />

      <textarea
        placeholder="Purpose of Donation"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">Select Rating (1-5)</option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐</option>
        <option value="3">3 ⭐</option>
        <option value="4">4 ⭐</option>
        <option value="5">5 ⭐</option>
      </select>

      <button onClick={handleSave}>
        Save Profile
      </button>
    </div>
  );
}

export default Profile;