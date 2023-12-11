import React, { useState } from 'react';
import '../../style/User.css'


const RequestInstallments = () => {
  const [installmentOption, setInstallmentOption] = useState('');
  const [message, setMessage] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [formSubmitted, setFormSubition] = useState(false)
  const handleInstallmentChange = (e) => {
    setInstallmentOption(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSubmit = () => {
    setInstallmentOption('')
    setMessage('')
    setContactNumber('')
    setFormSubition(!formSubmitted)
  };

  return (
    <div className='Dialog'>
      {formSubmitted ? <h1>Request sent.</h1>:
    <div className="installment-inquiry-container">
      <h3 className='text'>Installment Inquiry</h3>

      <label className='text' htmlFor="installmentOption">Number of Installments:</label>
      <select id="installmentOption" value={installmentOption} onChange={handleInstallmentChange}>
        <option value="2">2 Installments</option>
        <option value="3">3 Installments</option>
      </select>

      <label  className='text'  htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={handleMessageChange} />

      <label className='text' htmlFor="contactNumber">Contact Number:</label>
      <input
        id="contactNumber"
        type="text"
        value={contactNumber}
        onChange={handleContactNumberChange}
        placeholder="Enter your contact number"
        required
      />
      <button  className='text'  onClick={handleSubmit}>Submit Request</button>
    </div> }
    </div>
  );
};

export default RequestInstallments