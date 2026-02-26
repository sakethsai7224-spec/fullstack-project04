import { useState } from "react";

function Track({ database }) {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const trackItem = () => {
    if (database[id]) {
      setResult(database[id]);
    } else {
      setResult("Not Found");
    }
  };

  return (
    <div className="card">
      <h2>Track Item</h2>
      <input
        placeholder="Enter Serial ID"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={trackItem}>Track</button>

      {result && (
        <pre>{typeof result === "string" ? result : JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}

export default Track;