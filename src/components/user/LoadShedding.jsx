import React from "react";

const LoadShedding = () => {

    const loadSheddingDetails = [
        { duration: "08:00 AM - 10:00 AM", area: "Downtown", date: "2023-12-01" },
        { duration: "01:00 PM - 03:00 PM", area: "Suburb A", date: "2023-12-02" },
        { duration: "06:00 PM - 08:00 PM", area: "Suburb B", date: "2023-12-03" },
      ];

  return (
    <div className="Dialog">
      <h2>Load Shedding Details</h2>
      <table>
        <thead>
          <tr>
            <th>Load Shedding Duration</th>
            <th>Area</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {loadSheddingDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.duration}</td>
              <td>{detail.area}</td>
              <td>{detail.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={() => { setShowTime(!showTime) }}>close</button> */}
    </div>
  );
};

export default LoadShedding;
