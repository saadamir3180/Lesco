import React from 'react'

const BillPayment = () => {
  return (
    <div className='Dialog'>
            <h2>Account Information</h2>
            <p>Account Title: Saad Amir</p>
            <p>Bank Name: Mezzan Bank</p>
            <p>Account Number: 092001079782726</p>
            <h3>
              <label htmlFor="fileInput">Upload Document:</label>
            </h3>
            <input type="file" id="fileInput" />
            {/* <button onClick={() => { setPayBills(!payBills) }}>close</button> */}
    </div>
  )
}

export default BillPayment