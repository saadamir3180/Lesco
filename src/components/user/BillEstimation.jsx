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
    let estimation =0
      if(unit<=100 && unit>= 0){
        estimation = parseFloat(unit) * 15;
      }
      else if(unit<=200 && unit > 100){
        estimation = parseFloat(unit) * 20;
      }
      else if(unit<=300 && unit> 200){
        estimation = parseFloat(unit) * 25;
      }
          else if(unit<=400 && unit> 300){
            estimation = parseFloat(unit) * 40;
          }
            else if(unit<=500 && unit> 400){
              estimation = parseFloat(unit) * 50;
            }
            else if(unit>500){
              estimation = parseFloat(unit) * 55;
            }
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
