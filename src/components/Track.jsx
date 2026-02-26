import { useState } from "react";

function Track({ database }) {
  const [serialId, setSerialId] = useState("");
  const [result, setResult] = useState(null);

  const handleTrack = () => {
    if (!serialId) {
      alert("Please enter Serial ID");
      return;
    }

    if (database[serialId]) {
      setResult(database[serialId]);
    } else {
      setResult("not-found");
    }
  };

  return (
    <div className="card">
      <h2>Track Donation / Request</h2>

      <input
        type="text"
        placeholder="Enter Serial ID"
        value={serialId}
        onChange={(e) => setSerialId(e.target.value)}
      />

      <button onClick={handleTrack}>
        Track
      </button>

      {result && result !== "not-found" && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <p><strong>Type:</strong> {result.type}</p>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Item:</strong> {result.item}</p>
          <p><strong>Quantity:</strong> {result.quantity}</p>
          <p><strong>Status:</strong> {result.status}</p>
        </div>
      )}

      {result === "not-found" && (
        <p style={{ marginTop: "15px", color: "red" }}>
          Serial ID not found
        </p>
      )}
    </div>
  );
}

export default Track;