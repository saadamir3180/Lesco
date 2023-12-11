import '../../style/User.css'
import { auth } from '../../firebaseConfig';
import { useState } from 'react';
const BillPayment = () => {
    const [ name, setName ] = useState('')
    const [ cardNumber, setCardNumber ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ cvv, setCvv ] = useState('')
    const [ paid, setpaid ] = useState(false)
  return (
    <div className="Dialog paymentDialog">
        <div className='billDetails'>{paid ? <p>Your bill has been submiited</p> : null}</div>
      <div className="mainscreen">
          <div className="rightside">
            <form onSubmit={(e)=>{e.preventDefault();setName(''), setCardNumber(''), setAmount(''), setCvv(''), setpaid(true)}}>
              <h1>Pay Bill here</h1>
              <h2>Payment Information</h2>
              <p>Connection Owner</p>
              <input type="text" className="inputbox" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required />
              <p>Card Number</p>
              <input
                type="number"
                className="inputbox"
                name="card_number"
                id="card_number"
                value={cardNumber}
                onChange={(e)=>{setCardNumber(e.target.value)}} 
                required
              />
              <p>Amount</p>
              <input
                type="number"
                className="inputbox"
                name="card_number"
                id="card_number"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
              />

              <p>Card Type</p>
              <select className="inputbox" name="card_type" id="card_type" required>
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select> 
              <div className="expcvv">
                <p className="expcvv_text">Expiry</p>
                <input
                  type="date"
                  className="inputbox"
                  name="exp_date"
                  id="exp_date"
                  required
                />

                <p class="expcvv_text2">CVV</p>
                <input
                  type="password"
                  className="inputbox"
                  name="cvv"
                  id="cvv"
                  value={cvv}
                  onChange={(e)=>{setCvv(e.target.value)}}
                  required
                />
              </div>
              <p></p>
              <button type="submit" className="buttonForm">
                Pay now
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default BillPayment;
