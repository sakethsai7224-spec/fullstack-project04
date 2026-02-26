import { useState } from "react";

function Logistics({ database, setDatabase }) {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("Pending");

  const updateStatus = () => {
    if (!database[id]) {
      alert("ID not found");
      return;
    }

    setDatabase((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        status,
      },
    }));

    alert("Status updated");
  };

  return (
    <div className="card">
      <h2>Logistics</h2>
      <input
        placeholder="Enter Serial ID"
        onChange={(e) => setId(e.target.value)}
      />
      <select onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Transit</option>
        <option>Delivered</option>
      </select>
      <button onClick={updateStatus}>Update</button>
    </div>
  );
}

export default Logistics;