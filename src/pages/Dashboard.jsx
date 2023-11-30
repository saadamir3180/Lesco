import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebaseConfig';
import '../style/Pages.css';

const Dashboard = () => {
  const [showTime, setShowTime] = useState(false);
  const [payBills, setPayBills] = useState(false);

  const loadSheddingDetails = [
    { duration: '08:00 AM - 10:00 AM', area: 'Downtown', date: '2023-12-01' },
    { duration: '01:00 PM - 03:00 PM', area: 'Suburb A', date: '2023-12-02' },
    { duration: '06:00 PM - 08:00 PM', area: 'Suburb B', date: '2023-12-03' },
    // Add more objects as needed
  ];

  const billEntries = [
    { cnic: '1234567890123', email: 'user@example.com', amount: 100, id: 'B001', dueDate: '2023-12-31', status: 'unpaid' },
    { cnic: '9876543210987', email: 'anotheruser@example.com', amount: 150, id: 'B002', dueDate: '2023-12-15', status: 'paid' },
    { cnic: '4567890123456', email: 'thirduser@example.com', amount: 120, id: 'B003', dueDate: '2023-12-20', status: 'unpaid' },
    { cnic: '7890123456789', email: 'fourthuser@example.com', amount: 200, id: 'B004', dueDate: '2023-12-25', status: 'paid' },
    { cnic: '2345678901234', email: 'fifthuser@example.com', amount: 180, id: 'B005', dueDate: '2023-12-10', status: 'unpaid' },
    { cnic: '3456789012345', email: 'sixthuser@example.com', amount: 130, id: 'B006', dueDate: '2023-12-05', status: 'paid' },
    { cnic: '5678901234567', email: 'seventhuser@example.com', amount: 90, id: 'B007', dueDate: '2023-12-28', status: 'unpaid' },
    { cnic: '6789012345678', email: 'eighthuser@example.com', amount: 170, id: 'B008', dueDate: '2023-12-18', status: 'paid' },
    { cnic: '8901234567890', email: 'ninethuser@example.com', amount: 110, id: 'B009', dueDate: '2023-12-15', status: 'unpaid' },
    { cnic: '0123456789012', email: 'tenthuser@example.com', amount: 190, id: 'B010', dueDate: '2023-12-22', status: 'paid' },
  ];

  const [entries, setEntries] = useState(billEntries);

  const handleChangeStatus = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        // Toggle between 'paid' and 'unpaid' status
        entry.status = entry.status === 'paid' ? 'unpaid' : 'paid';
      }
      return entry;
    });

    setEntries(updatedEntries);
  };

  const [user, loading] = useAuthState(auth);

  return (
    <div className='page'>
      {loading ? (<span>loading..</span>) :
        (<div>
          {user !== null ? <p>{user.email}</p> : <p>No User</p>}
          {user?.email === 'saadamir318@gmail.com' ? <div>
            <h2>Bill Entries</h2>
            <table>
              <thead>
                <tr>
                  <th>User CNIC</th>
                  <th>User Email</th>
                  <th>Bill Amount</th>
                  <th>Bill ID</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.cnic}</td>
                    <td>{entry.email || 'N/A'}</td>
                    <td>{entry.amount}</td>
                    <td>{entry.id}</td>
                    <td>{entry.dueDate}</td>
                    <td>{entry.status}</td>
                    <td>
                      <button onClick={() => handleChangeStatus(entry.id)}>Change Status</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> :
            <ul>
              <li><button className='cur' onClick={() => { setShowTime(!showTime) }}>Check Load Shedding schedule</button></li>
              <li ><button className='cur' onClick={() => { user !== null ? setPayBills(!payBills) : null }}>Pay Bills</button></li>
            </ul>
          }
          {showTime ?
            <div className='Dialog'>
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
              <button onClick={() => { setShowTime(!showTime) }}>close</button>
            </div> : null}
          {payBills ? <div className='Dialog'>
            <h2>Account Information</h2>
            <p>Account Title: Saad Amir</p>
            <p>Bank Name: Mezzan Bank</p>
            <p>Account Number: 092001079782726</p>
            {/* Input of type file */}
            <h3>
              <label htmlFor="fileInput">Upload Document:</label>
            </h3>
            <input type="file" id="fileInput" />
            <button onClick={() => { setPayBills(!payBills) }}>close</button>
          </div> : null}
        </div>)
      }
    </div>
  );
}

export default Dashboard;
