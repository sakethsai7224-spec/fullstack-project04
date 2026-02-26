function Timetable() {
  return (
    <div className="timetable-container">
      <h2>Donation Timings</h2>

      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Available Timings</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>7:00 AM - 7:00 PM</td>
          </tr>
        </tbody>
      </table>

      <p className="timetable-note">
        <strong>NOTE:</strong> During festival times, donations are accepted 
        <strong> 24/7 (All Day & Night)</strong>.
      </p>
    </div>
  );
}

export default Timetable;