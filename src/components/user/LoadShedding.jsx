import '../../style/User.css'

const LoadShedding = () => {

    const loadSheddingDetails = [
        { duration: "08:00 AM - 10:00 AM", area: "Downtown", date: "2023-12-01", zipCode: "5142" },
        { duration: "01:00 PM - 03:00 PM", area: "Suburb A", date: "2023-12-02", zipCode: "2342" },
        { duration: "06:00 PM - 08:00 PM", area: "Suburb B", date: "2023-12-03", zipCode: "4643" },
      ];

  return (
    <div className="Dialog">
      <h2>Load Shedding Details</h2>
      <table className="content-table">
        <thead>
          <tr>
            <th>Load Shedding Duration</th>
            <th>Area</th>
            <th>Date</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {loadSheddingDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.duration}</td>
              <td>{detail.area}</td>
              <td>{detail.date}</td>
              <td>{detail.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadShedding;
