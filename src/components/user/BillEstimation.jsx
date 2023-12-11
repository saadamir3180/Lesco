import React, { useState } from 'react';
import '../../style/User.css'
const BillEstimation = () => {
  const [unit, setUnit] = useState('');
  const [result, setResult] = useState(null);

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const calculateEstimation = () => {
    if (unit.trim() !== '' && !isNaN(unit)) {
      const estimation = parseFloat(unit) * 20;
      setResult(estimation.toFixed(2)); // Rounded to two decimal places
    } else {
      setResult(null);
    }
  };

  return (
    <div className="Dialog">
      <h2>Bill Estimation</h2>
      <label htmlFor="unit">Enter units to get an estimation of Bill</label>
      <input
      className='input'
        id="unit"
        type="text"
        value={unit}
        onChange={handleUnitChange}
        placeholder="Enter units..."
      />
      <button onClick={calculateEstimation}>Calculate</button>

      {result !== null && (
        <div>
          <p>Estimated Bill: {result}</p>
        </div>
      )}
    </div>
  );
};

export default BillEstimation;
