function Timetable() {
  return (
    <div className="timetable-container">
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        Donation Timetable
      </h2>

      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Availability</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>

      <p className="timetable-note">
        NOTE: During festival times, donation services are available 24/7.
      </p>
    </div>
  );
}

export default Timetable;