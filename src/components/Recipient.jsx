import { useState } from "react";

function Recipient({ setDatabase }) {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");

  const generateId = () => "GC" + Math.floor(Math.random() * 100000);

  const submitRequest = () => {
    const id = generateId();

    setDatabase((prev) => ({
      ...prev,
      [id]: {
        type: "Request",
        name,
        item,
        qty,
        status: "Requested",
      },
    }));

    alert("Request ID: " + id);
  };

  return (
    <div className="card">
      <h2>Recipient</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Item" onChange={(e) => setItem(e.target.value)} />
      <input type="number" placeholder="Qty" onChange={(e) => setQty(e.target.value)} />
      <button onClick={submitRequest}>Submit</button>
    </div>
  );
}

export default Recipient;