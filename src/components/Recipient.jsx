import { useState } from "react";

function Recipient({ setDatabase }) {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const generateId = () => {
    return "RC" + Math.floor(Math.random() * 100000);
  };

  const handleRequest = () => {
    if (!name || !item || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const serialId = generateId();

    setDatabase((prevDatabase) => ({
      ...prevDatabase,
      [serialId]: {
        type: "Request",
        name: name,
        item: item,
        quantity: quantity,
        status: "Requested",
      },
    }));

    alert(`Request submitted! Your Serial ID is: ${serialId}`);

    // Clear form
    setName("");
    setItem("");
    setQuantity("");
  };

  return (
    <div className="card">
      <h2>Recipient - Request Items</h2>

      <input
        type="text"
        placeholder="Recipient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Item Needed"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleRequest}>
        Submit Request
      </button>
    </div>
  );
}

export default Recipient;