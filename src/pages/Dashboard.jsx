import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import "../style/Pages.css";

const Dashboard = () => {
  const [showTime, setShowTime] = useState(false);
  const [payBills, setPayBills] = useState(false);

  const loadSheddingDetails = [
    { duration: "08:00 AM - 10:00 AM", area: "Downtown", date: "2023-12-01" },
    { duration: "01:00 PM - 03:00 PM", area: "Suburb A", date: "2023-12-02" },
    { duration: "06:00 PM - 08:00 PM", area: "Suburb B", date: "2023-12-03" },
  ];

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

  const [user, loading] = useAuthState(auth);

  return (
    // <div className='page'>
    //   {loading ? (<span>loading..</span>) :
    //     (<div>
    //       {user !== null ? <p>{user.email}</p> : <p>No User</p>}
    //       {user?.email === 'saadamir318@gmail.com' ? <div>
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
    //       </div> :
    //         <ul>
    //           <li><button className='cur' onClick={() => { setShowTime(!showTime) }}>Check Load Shedding schedule</button></li>
    //           <li ><button className='cur' onClick={() => { user !== null ? setPayBills(!payBills) : null }}>Pay Bills</button></li>
    //         </ul>
    //       }
    //       {showTime ?
    //         <div className='Dialog'>
    //           <h2>Load Shedding Details</h2>
    //           <table>
    //             <thead>
    //               <tr>
    //                 <th>Load Shedding Duration</th>
    //                 <th>Area</th>
    //                 <th>Date</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {loadSheddingDetails.map((detail, index) => (
    //                 <tr key={index}>
    //                   <td>{detail.duration}</td>
    //                   <td>{detail.area}</td>
    //                   <td>{detail.date}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //           <button onClick={() => { setShowTime(!showTime) }}>close</button>
    //         </div> : null}
    //       {payBills ? <div className='Dialog'>
    //         <h2>Account Information</h2>
    //         <p>Account Title: Saad Amir</p>
    //         <p>Bank Name: Mezzan Bank</p>
    //         <p>Account Number: 092001079782726</p>
    //         <h3>
    //           <label htmlFor="fileInput">Upload Document:</label>
    //         </h3>
    //         <input type="file" id="fileInput" />
    //         <button onClick={() => { setPayBills(!payBills) }}>close</button>
    //       </div> : null}
    //     </div>)
    //   }
    // </div>

    <>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-3">
            <aside
              id="sidebar-multi-level-sidebar"
              class=" z-40  h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div class=" DashBoard h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                  <li>
                    <a
                      onClick={() => {
                        setShowTime(true);
                        setPayBills(false);
                      }}
                      class="cur flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                        />
                      </svg>
                      <span class="flex-1 ms-3">Load Shedding Schedule</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        user !== null ? setPayBills(!payBills) : null;
                        setShowTime(false);
                      }}
                      href="#"
                      class=" cur flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                      </svg>
                      <span class="flex-1 ms-3 whitespace-nowrap">
                        Pay Bill
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-md-9">
            <div className="page">
              {loading ? (
                <span>loading..</span>
              ) : (
                <div>
                  {user !== null ? <p>{user.email}</p> : <p>No User</p>}
                  {user?.email === "saadamir318@gmail.com" ? (
                    <div>
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
                              <td>{entry.email || "N/A"}</td>
                              <td>{entry.amount}</td>
                              <td>{entry.id}</td>
                              <td>{entry.dueDate}</td>
                              <td>{entry.status}</td>
                              <td>
                                <button
                                  onClick={() => handleChangeStatus(entry.id)}
                                >
                                  Change Status
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    // User
                    <ul></ul>
                  )}
                  {showTime ? (
                    <div class="Dialog">
                      <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                        <thead class="text-xs  uppercase">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Load Shedding Duration
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Area
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {loadSheddingDetails.map((detail, index) => (
                          <tr class="odd:bg-white odd:dark:bg-gray-900 border-b dark:border-gray-700" key={index}>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{detail.duration}</td>
                            <td class="px-6 py-4">{detail.area}</td>
                            <td class="px-6 py-4">{detail.date}</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                      <button className="button"
                      onClick={() => {
                        setShowTime(!showTime);
                      }}
                    >
                      close
                    </button>
                    </div>
                  ) : null}
                  {payBills ? (
                    <div className="Dialog">
                      <h2>Account Information</h2>
                      <p>Account Title: Saad Amir</p>
                      <p>Bank Name: Mezzan Bank</p>
                      <p>Account Number: 092001079782726</p>
                      <h3>
                        <label htmlFor="fileInput">Upload Document:</label>
                      </h3>
                      <input type="file" id="fileInput" />
                      <button
                        onClick={() => {
                          setPayBills(!payBills);
                        }}
                      >
                        close
                      </button>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
