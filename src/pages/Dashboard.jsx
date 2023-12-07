import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import "../style/Dashboard.css";
import BillEntities from "../components/admin/BillEntities";
import Debt from "../components/admin/Debt";
import Revenue from "../components/admin/Revenue";
import RequestInstallments from "../components/user/RequestInstallments";
import BillEstimation from "../components/user/BillEstimation";
import BillPayment from "../components/user/BillPayment";
import LoadShedding from "../components/user/LoadShedding";

const Dashboard = () => {
  //state values for user Dashboard
  const [showTime, setShowTime] = useState(false);
  const [payBills, setPayBills] = useState(false);
  const [billEstimation, setBillEstimation] = useState(false);
  const [requestInstallments, setRequestInstallments] = useState(false);
  //state values for admin Dashboard
  const [showBills, setShowBills] = useState(false);
  const [badDebt, setBadDebt] = useState(false);
  const [revenue, setRevenue] = useState(false);

  const setAdminDefault = ()=>{
    setRevenue(false)
    setBadDebt(false)
    setShowBills(false)
  }
  const setUserDefault = ()=>{
    setShowTime(false)
    setPayBills(false)
    setBillEstimation(false)
    setRequestInstallments(false)
  }

  const getStatusColor = (status) => {
    if (status == "paid") {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };

  const [user, loading] = useAuthState(auth);

  return (
    <div className="page">
      {loading ? (
        <span>loading..</span>
      ) : (
        <div className="dashboard">
          {user?.email === "saadamir318@gmail.com" ? (
            <ul className="dashboardMenu">
              <li>
                <h3>Admin: </h3>
                {user !== null ? (
                  <li>
                    <p>{user.email}</p>
                  </li>
                ) : (
                  <p>No User</p>
                )}
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {setAdminDefault();{
                    user !== null ? setShowBills(!showBills) : null;
                  }}}
                >
                  Show/Edit Bills
                </button>
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {setAdminDefault();{
                    user !== null ? setBadDebt(!badDebt) : null;
                  }}}
                >
                  Show Bad Debt
                </button>
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {setAdminDefault();{
                    user !== null ? setRevenue(!revenue) : null;
                  }}}
                >
                  Show Revenue
                </button>
              </li>
            </ul>
          ) : (
            <ul className="dashboardMenu">
              {user !== null ? (
                <li>
                  <p>{user.email}</p>
                </li>
              ) : (
                <p>No User</p>
              )}
              <li>
                <button
                  className="button"
                  onClick={() => {setUserDefault();{
                    setShowTime(!showTime);
                  }}}
                >
                  Load Shedding schedule
                </button>
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {setUserDefault();{
                    user !== null
                      ? setRequestInstallments(!requestInstallments)
                      : null;
                  }}}
                >
                  Request Installments
                </button>
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {setUserDefault();{
                    user !== null ? setBillEstimation(!billEstimation) : null;
                  }}}
                >
                  Bill Estimation
                </button>
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {setUserDefault();{
                    user !== null ? setPayBills(!payBills) : null;
                  }}}
                >
                  Pay Bills
                </button>
              </li>
            </ul>
          )}
          {showTime ? <LoadShedding /> : null}
          {payBills ? <BillPayment /> : null}
          {billEstimation ? <BillEstimation /> : null}
          {requestInstallments ? <RequestInstallments /> : null}
          {/* Administration Controls */}
          {showBills ? <BillEntities /> : null}
          {badDebt ? <Debt /> : null}
          {revenue ? <Revenue /> : null}
        </div>
      )}
    </div>

    // <>
    //   <div className="page">
    //     {loading ? (
    //       <span>loading..</span>
    //     ) : (
    //       <div className="row">
    //         {user?.email === "saadamir318@gmail.com" ? (
    //           <>
    //             <div className="col-md-3 p-0">
    //               <aside
    //                 id="sidebar-multi-level-sidebar"
    //                 className=" z-40 w-full transition-transform -translate-x-0 "
    //                 aria-label="Sidebar"
    //               >
    //                 <div className="DashBoard  px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    //                   <ul className="space-y-2 font-medium">
    //                     <li>
    //                       <a
    //                         href="#"
    //                         className=" cur flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //                       >
    //                         <svg
    //                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //                           aria-hidden="true"
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           fill="currentColor"
    //                           viewBox="0 0 20 20"
    //                         >
    //                           <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
    //                           <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
    //                           <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
    //                         </svg>
    //                         <span className="flex-1 ms-3 whitespace-nowrap">
    //                           View Bills
    //                         </span>
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         href="#"
    //                         className="cur UserName flex p-2 mb-3 bottom-0 fixed text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //                       >
    //                         {user !== null ? (
    //                           <span className="mx-auto">{user.email}</span>
    //                         ) : (
    //                           <span className="mx-auto">No User</span>
    //                         )}
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </aside>
    //             </div>
    //             <div className="col-md-9">
    //               <h1 className="pageHeading my-4">
    //                 <b>Bill Entries</b>
    //               </h1>
    //               <div className="Dialog">
    //                 <table className="text-sm text-left rtl:text-right dark:text-gray-400">
    //                   <thead className="text-xs uppercase">
    //                     <tr>
    //                       <th scope="col" className="px-3 py-3">
    //                         Sr. No.
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         User CNIC
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         User Email
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         Bill Amount
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         Bill ID
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         Due Date
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         Status
    //                       </th>
    //                       <th scope="col" className="px-3 py-3">
    //                         Action
    //                       </th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {entries.map((entry) => (
    //                       <tr
    //                         className="odd:bg-white odd:dark:bg-gray-900  border-b dark:border-gray-700"
    //                         key={entry.id}
    //                       >
    //                         <th scope="row" className="px-3 py-4">
    //                           {userId++}
    //                         </th>
    //                         <td
    //                           scope="row"
    //                           className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    //                         >
    //                           {entry.cnic}
    //                         </td>
    //                         <td className="px-3 py-4">
    //                           {entry.email || "N/A"}
    //                         </td>
    //                         <td className="px-3 py-4">{entry.amount}</td>
    //                         <td className="px-3 py-4">{entry.id}</td>
    //                         <td className="px-3 py-4">{entry.dueDate}</td>
    //                         <td
    //                           className="px-3 py-4 uppercase"
    //                           style={getStatusColor(entry.status)}
    //                         >
    //                           {entry.status}
    //                         </td>
    //                         <td className="px-3 py-4">
    //                           <button
    //                             onClick={() => handleChangeStatus(entry.id)}
    //                           >
    //                             Change Status
    //                           </button>
    //                         </td>
    //                       </tr>
    //                     ))}

    //                     <tr>
    //                       <th className="px-6 py-3"></th>
    //                       <th className="px-6 py-3"></th>
    //                       <th className="px-6 py-3"></th>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </>
    //         ) : (
    //           //User
    //           <div className="col-md-3 p-0 ">
    //             <aside
    //               id="sidebar-multi-level-sidebar"
    //               className=" z-40 w-full  transition-transform -translate-x-0 "
    //               aria-label="Sidebar"
    //             >
    //               <div className="DashBoard px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    //                 <ul className="space-y-2 font-medium">
    //                   <li>
    //                     <a
    //                       onClick={() => {
    //                         setShowTime(true);
    //                         setPayBills(false);
    //                       }}
    //                       className="cur flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //                     >
    //                       <svg
    //                         className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //                         aria-hidden="true"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         fill="none"
    //                         viewBox="0 0 18 16"
    //                       >
    //                         <path
    //                           stroke="currentColor"
    //                           stroke-linecap="round"
    //                           stroke-linejoin="round"
    //                           stroke-width="2"
    //                           d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
    //                         />
    //                       </svg>
    //                       <span className="flex-1 ms-3">
    //                         Load Shedding Schedule
    //                       </span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       onClick={() => {
    //                         user !== null ? setPayBills(!payBills) : null;
    //                         setShowTime(false);
    //                       }}
    //                       href="#"
    //                       className=" cur flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //                     >
    //                       <svg
    //                         className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //                         aria-hidden="true"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         fill="currentColor"
    //                         viewBox="0 0 20 20"
    //                       >
    //                         <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
    //                         <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
    //                         <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
    //                       </svg>
    //                       <span className="flex-1 ms-3 whitespace-nowrap">
    //                         Pay Bill
    //                       </span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       className="cur flex UserName mb-3 bottom-0 p-2 fixed text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //                     >
    //                       {user !== null ? (
    //                         <span className="mx-auto">{user.email}</span>
    //                       ) : (
    //                         <span className="mx-auto">No User</span>
    //                       )}
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </aside>
    //           </div>
    //         )}
    //         {showTime ? (
    //           <div className="col-md-9">
    //             <div className="Dialog mt-4">
    //               <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
    //                 <thead className="text-xs uppercase">
    //                   <tr>
    //                     <th scope="col" className="px-6 py-3">
    //                       Load Shedding Duration
    //                     </th>
    //                     <th scope="col" className="px-6 py-3">
    //                       Area
    //                     </th>
    //                     <th scope="col" className="px-6 py-3">
    //                       Date
    //                     </th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {loadSheddingDetails.map((detail, index) => (
    //                     <tr
    //                       className="odd:bg-white odd:dark:bg-gray-900  border-b dark:border-gray-700"
    //                       key={index}
    //                     >
    //                       <td
    //                         scope="row"
    //                         className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    //                       >
    //                         {detail.duration}
    //                       </td>
    //                       <td className="px-6 py-4">{detail.area}</td>
    //                       <td className="px-6 py-4">{detail.date}</td>
    //                     </tr>
    //                   ))}

    //                   <tr>
    //                     <th className="px-6 py-3"></th>
    //                     <th className="px-6 py-3"></th>
    //                     <th className="px-6 py-3"></th>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //               <div className="text-center">
    //                 <button
    //                   className="CustomButton"
    //                   onClick={() => {
    //                     setShowTime(!showTime);
    //                   }}
    //                 >
    //                   close
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         ) : null}
    //         {payBills ? (
    //           <div className="col-md-9">
    //             <div className="Dialog mt-4">
    //               {/* <h2>Account Information</h2>
    //                 <p>Account Title: Saad Amir</p>
    //                 <p>Bank Name: Mezzan Bank</p>
    //                 <p>Account Number: 092001079782726</p>
    //                 <h3>
    //                   <label htmlFor="fileInput">Upload Document:</label>
    //                 </h3>
    //                 <input type="file" id="fileInput" />
    //                 <button
    //                   onClick={() => {
    //                     setPayBills(!payBills);
    //                   }}
    //                 >
    //                   close
    //                 </button> */}

    //               <div class="w-full m-auto p-8">
    //                 <div class="paymentForm shadow-lg p-6">
    //                   <form>
    //                     <h2 class="text-lg font-medium mb-6 t-center">
    //                       Bill Information
    //                     </h2>
    //                     <div class="grid grid-cols-2 mb-4 gap-6">
    //                       <div class="col-span-2 sm:col-span-1">
    //                         <label
    //                           for="reg-cnic"
    //                           class="block text-sm font-medium mb-2"
    //                         >
    //                           Registered CNIC
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="reg-cnic"
    //                           id="reg-cnic"
    //                           placeholder="32XX-XXXXXXX-X"
    //                           class="w-full py-3 text-dark px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
    //                         />
    //                       </div>
    //                       <div class="col-span-2 sm:col-span-1">
    //                         <label
    //                           for="bill-id"
    //                           class="block text-sm font-medium mb-2"
    //                         >
    //                           Bill ID
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="bill-id"
    //                           id="bill-id"
    //                           placeholder="1234"
    //                           class="w-full py-3 text-dark px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
    //                         />
    //                       </div>
    //                     </div>
    //                     <h2 class="text-lg font-medium mb-6 t-center">
    //                       Payment Information
    //                     </h2>
    //                     <div class="grid grid-cols-2 gap-6">
    //                       <div class="col-span-2 sm:col-span-1">
    //                         <label
    //                           for="card-number"
    //                           class="block text-sm font-medium mb-2"
    //                         >
    //                           Card Number
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="card-number"
    //                           id="card-number"
    //                           placeholder="0000 0000 0000 0000"
    //                           class="w-full py-3 text-dark px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
    //                         />
    //                       </div>
    //                       <div class="col-span-2 sm:col-span-1">
    //                         <label
    //                           for="expiration-date"
    //                           class="block text-sm font-medium mb-2"
    //                         >
    //                           Expiration Date
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="expiration-date"
    //                           id="expiration-date"
    //                           placeholder="MM / YY"
    //                           class="w-full text-dark py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
    //                         />
    //                       </div>
    //                       <div class="col-span-2 sm:col-span-1">
    //                         <label
    //                           for="cvv"
    //                           class="block text-sm font-medium mb-2"
    //                         >
    //                           CVV
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="cvv"
    //                           id="cvv"
    //                           placeholder="000"
    //                           class="w-full text-dark py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
    //                         />
    //                       </div>
    //                       <div class="col-span-2 sm:col-span-1">
    //                         <label
    //                           for="card-holder"
    //                           class="block text-sm font-medium mb-2"
    //                         >
    //                           Card Holder
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="card-holder"
    //                           id="card-holder"
    //                           placeholder="Full Name"
    //                           class="w-full text-dark py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div class="mt-8 t-center">
    //                       <button
    //                         type=""
    //                         class="CustomButtonPayBill bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
    //                       >
    //                         Pay Bill
    //                       </button>
    //                     </div>
    //                   </form>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ) : null}
    //       </div>
    //     )}
    //   </div>
    // </>
  );
};

export default Dashboard;
