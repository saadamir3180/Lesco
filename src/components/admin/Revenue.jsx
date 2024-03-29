import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy, limit, updateDoc, doc } from "firebase/firestore";
import '../../style/Admin.css';

import { dataBase } from "../../firebaseConfig";

const Revenue = () => {
  const ENTITY = 'bills';
  const [bills, setBills] = useState([]);
  const billsRef = collection(dataBase, ENTITY);
  let money = 0;
  const [netRevenue, setNetRevenue] = useState(0);

  useEffect(() => {
    try {
      const queryRef = query(
        billsRef,
      );
      const unsubscribe = onSnapshot(queryRef, (snapshot) => {
        let bills = [];
        money = 0;
        snapshot.forEach((doc) => {
          bills.push(
            { ...doc.data(), id: doc.id }
          );
          bills.forEach(value => {
            money += ((doc.data().amountPayed))/2;
          });
          
          setNetRevenue(money)
        });
        setBills(bills);
      });

      return () => {
        unsubscribe();
      };

    } catch (err) {
      console.log("error:", err);
    }
  }, [billsRef]);

  const handleChangeStatus = async (id) => {
    const updatedEntries = bills.map((bill) => {
      if (bill.id === id) {
        const newStatus = !bill.status;

        // Update Firestore document
        const billDocRef = doc(dataBase, ENTITY, id);
        updateDoc(billDocRef, { status: newStatus });

        return {
          ...bill,
          status: newStatus,
        };
      }
      return bill;
    });

    setBills(updatedEntries);
  };

  return (
    <div className="Dialog">
      <h2>Bill Entries</h2>
      <table className="content-table">
        <thead>
          <tr >
            <th>User CNIC</th>
            <th>Bill Amount</th>
            <th>Bill ID</th>
            <th>Due Date</th>
            <th>Amount Payed</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bills && bills.map((bill) => (
            <tr key={bill.id} >
              <td>{bill.cnic || 'N/A'}</td>
              <td>{bill.amount || 'N/A'}</td>
              <td>{bill.id}</td>
              <td>{bill.dueDate ? new Date(bill.dueDate.seconds * 1000).toLocaleDateString() : 'N/A'}</td>
              <td>{bill.amountPayed && bill.status ? bill.amountPayed : '0'}</td>
              <td>{bill.status ? 'paid' : 'unpaid'}</td>
              <td>
                <button onClick={() => handleChangeStatus(bill.id)}>Change Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
      <h3>Total Revenue: {netRevenue}</h3>
    </div>
  );
}

export default Revenue