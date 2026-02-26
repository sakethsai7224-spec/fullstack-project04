function Admin({ database }) {
  const entries = Object.entries(database);

  if (entries.length === 0) {
    return (
      <div className="card">
        <h2>Admin Panel</h2>
        <p>No donations or requests available.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Admin Panel</h2>

      {entries.map(([id, data]) => (
        <div
          key={id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <p><strong>Serial ID:</strong> {id}</p>
          <p><strong>Type:</strong> {data.type}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Item:</strong> {data.item}</p>
          <p><strong>Quantity:</strong> {data.qty}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;