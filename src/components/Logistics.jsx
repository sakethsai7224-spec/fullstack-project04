import { useState } from "react";

function Logistics({ database, setDatabase }) {
  const [serialId, setSerialId] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleUpdate = () => {
    if (!serialId) {
      alert("Please enter Serial ID");
      return;
    }

    if (!database[serialId]) {
      alert("Serial ID not found");
      return;
    }

    const updatedDatabase = {
      ...database,
      [serialId]: {
        ...database[serialId],
        status: status,
      },
    };

    setDatabase(updatedDatabase);
    alert("Status updated successfully");
    setSerialId("");
  };

  return (
    <div className="card">
      <h2>Logistics Panel</h2>

      <input
        type="text"
        placeholder="Enter Serial ID"
        value={serialId}
        onChange={(e) => setSerialId(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="In Transit">In Transit</option>
        <option value="Delivered">Delivered</option>
      </select>

      <button onClick={handleUpdate}>
        Update Status
      </button>
    </div>
  );
}

export default Logistics;