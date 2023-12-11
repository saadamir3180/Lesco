import { useState } from 'react'
import GetBills from './GetBills';
const BillEntities = () => {


    const billEntries = [
        {
          cnic: "1234567890123",
          email: "user@example.com",
          amount: 100,
          id: "B001",
          dueDate: "2023-12-31",
          status: "unpaid",
        },
        {
          cnic: "9876543210987",
          email: "anotheruser@example.com",
          amount: 150,
          id: "B002",
          dueDate: "2023-12-15",
          status: "paid",
        },
        {
          cnic: "4567890123456",
          email: "thirduser@example.com",
          amount: 120,
          id: "B003",
          dueDate: "2023-12-20",
          status: "unpaid",
        },
        {
          cnic: "7890123456789",
          email: "fourthuser@example.com",
          amount: 200,
          id: "B004",
          dueDate: "2023-12-25",
          status: "paid",
        },
        {
          cnic: "2345678901234",
          email: "fifthuser@example.com",
          amount: 180,
          id: "B005",
          dueDate: "2023-12-10",
          status: "unpaid",
        },
        {
          cnic: "3456789012345",
          email: "sixthuser@example.com",
          amount: 130,
          id: "B006",
          dueDate: "2023-12-05",
          status: "paid",
        },
        {
          cnic: "5678901234567",
          email: "seventhuser@example.com",
          amount: 90,
          id: "B007",
          dueDate: "2023-12-28",
          status: "unpaid",
        },
        {
          cnic: "6789012345678",
          email: "eighthuser@example.com",
          amount: 170,
          id: "B008",
          dueDate: "2023-12-18",
          status: "paid",
        },
        {
          cnic: "8901234567890",
          email: "ninethuser@example.com",
          amount: 110,
          id: "B009",
          dueDate: "2023-12-15",
          status: "unpaid",
        },
        {
          cnic: "0123456789012",
          email: "tenthuser@example.com",
          amount: 190,
          id: "B010",
          dueDate: "2023-12-22",
          status: "paid",
        },
    ];

    const [entries, setEntries] = useState(billEntries);
    const handleChangeStatus = (id) => {
        const updatedEntries = entries.map((entry) => {
          if (entry.id === id) {
            entry.status = entry.status === "paid" ? "unpaid" : "paid";
          }
          return entry;
        });
    
        setEntries(updatedEntries);
      };

  return (
    <GetBills/>
    // <div className="Dialog">    
    //         <h2>Bill Entries</h2>
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>User CNIC</th>
    //               <th>User Email</th>
    //               <th>Bill Amount</th>
    //               <th>Bill ID</th>
    //               <th>Due Date</th>
    //               <th>Status</th>
    //               <th>Action</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {entries.map((entry) => (
    //               <tr key={entry.id}>
    //                 <td>{entry.cnic}</td>
    //                 <td>{entry.email || 'N/A'}</td>
    //                 <td>{entry.amount}</td>
    //                 <td>{entry.id}</td>
    //                 <td>{entry.dueDate}</td>
    //                 <td>{entry.status}</td>
    //                 <td>
    //                   <button onClick={() => handleChangeStatus(entry.id)}>Change Status</button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
  )
}

export default BillEntities