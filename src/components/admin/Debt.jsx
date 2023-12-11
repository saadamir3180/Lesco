import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy, limit, updateDoc, doc } from "firebase/firestore";
import '../../style/Admin.css';
import { dataBase } from "../../firebaseConfig";



const Debt = () => {
  const ENTITY = 'bills';
  const [latePayments, setLatePayments] = useState([]);
  const debtRef = collection(dataBase, ENTITY);
  let money = 0;
  const [totalLatePayment, setTotalLatePayment] = useState(0);

  useEffect(() => {
    try {
      const queryRef = query(debtRef);
      const unsubscribe = onSnapshot(queryRef, (snapshot) => {
        let debt = [];
        snapshot.forEach((doc) => {
          debt.push({ ...doc.data(), id: doc.id });
          
        latePayments.forEach(value => {
          money += ((doc.data().amountPayed-doc.data().amount)/2);
        });
        
        setTotalLatePayment(money)
        });
        setLatePayments(debt);
      });

      return () => {
        unsubscribe();
      };
    } catch (err) {
      console.log("error:", err);
    }
  }, [debtRef]);



  return (
    <div className="Dialog">
      <h2>Debt</h2>
    <table className="content-table">
      <thead>
        <tr>
          <th>Orignal Amount</th>
          <th>Amount Payed</th>
          <th>Contributer</th>
          <th>Due Date</th>
          <th>Payment Date</th>
        </tr>
      </thead>
      <tbody>
  {latePayments && latePayments.map((bill) => (
    // Removed the curly braces and added the return statement
    bill.late  ? 
      <tr key={bill.id} >
        <td>{bill.amount || 'N/A'}</td>
        <td>{bill.amountPayed || 'N/A'}</td>
        <td>{bill.cnic || 'N/A'}</td>
        <td>{bill.dueDate ? new Date(bill.dueDate.seconds * 1000).toLocaleDateString() : 'N/A'}</td>
        <td>{bill.dateSubbmit ? new Date(bill.dateSubbmit.seconds * 1000).toLocaleDateString() : 'N/A'}</td>
      </tr>
      : null
  ))}
</tbody>
    </table>
    <div>
    <p>Total Debt: <b>{totalLatePayment}</b></p>
    <p>Estimated debt of 4 Months <b>{totalLatePayment * 4}</b></p>
    </div>
      {/* 1. calc bad Debt, 2. estimate bad Debt for 4 months, 3. contributors */}
    </div>
  );
};

export default Debt;