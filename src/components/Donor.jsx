import { useState } from "react";

function Donor({ setDatabase }) {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");

  const generateId = () => "GC" + Math.floor(Math.random() * 100000);

  const submitDonation = () => {
    const id = generateId();

    setDatabase((prev) => ({
      ...prev,
      [id]: {
        type: "Donation",
        name,
        item,
        qty,
        status: "Pending",
      },
    }));

    alert("Serial ID: " + id);
  };

  return (
    <div className="card">
      <h2>Donor</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Item" onChange={(e) => setItem(e.target.value)} />
      <input type="number" placeholder="Qty" onChange={(e) => setQty(e.target.value)} />
      <button onClick={submitDonation}>Submit</button>
    </div>
  );
}

export default Donor;